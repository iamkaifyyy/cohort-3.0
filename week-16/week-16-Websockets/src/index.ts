import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("message", (message) => {
        const messageString = message.toString();
        console.log("Received message:", messageString);

        if (messageString === "ping") {
            socket.send("pong");
        }
    });

    socket.on("close", () => {
        console.log("User disconnected");
    });

    socket.on("error", (err) => {
        console.error("Socket error:", err);
    });


    return 
});

console.log("WebSocket server is running on ws://localhost:8080");