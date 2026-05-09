import { useEffect, useState } from "react";
function App() {
    // WebSocket state (can be null initially)
    const [socket, setSocket] = useState(null);
    // Function to send "ping"
    const sendMessage = () => {
        if (!socket)
            return;
        if (socket.readyState === WebSocket.OPEN) {
            socket.send("ping");
        }
    };
    useEffect(() => {
        // Create WebSocket connection
        const ws = new WebSocket("ws://localhost:8080");
        // Save socket in state
        setSocket(ws);
        // When connection opens
        ws.onopen = () => {
            console.log("Connected to server");
        };
        // When message comes from server
        ws.onmessage = (event) => {
            console.log("Message from server:", event.data);
            alert(event.data);
        };
        // When connection closes
        ws.onclose = () => {
            console.log("Disconnected from server");
        };
        // Cleanup (important)
        return () => {
            ws.close();
        };
    }, []);
    return Ping;
    Pong;
    WebSocket < /h1>
        < button;
    onClick = { sendMessage } > Send;
    Ping < /button>
        < /div>;
    ;
}
export default App;
//# sourceMappingURL=index.js.map