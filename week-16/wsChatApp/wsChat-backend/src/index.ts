import { WebSocketServer, WebSocket} from "ws";

const wss = new WebSocketServer({
    port: 8080
});

interface User {
    socket: WebSocket;
    room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        try {
            const parsedMessage = JSON.parse(message as unknown as string);
            if (parsedMessage.type === "JOIN") {
                allSockets = allSockets.filter(u => u.socket !== socket);
                allSockets.push({
                    socket,
                    room: parsedMessage.payload.roomId
                })
            }

            if (parsedMessage.type === "chat"){
                const currentUser = allSockets.find(u => u.socket === socket);
                if (currentUser) {
                    const currentUserRoom = currentUser.room;
                    allSockets.forEach(user => {
                        if (user.room === currentUserRoom && user.socket.readyState === WebSocket.OPEN) {
                            user.socket.send(parsedMessage.payload.message);
                        }
                    });
                }
            }
        } catch (e) {
            console.error("Failed to parse message", e);
        }
    })

    socket.on("close", () => {
        allSockets = allSockets.filter(u => u.socket !== socket);
    });
})
