import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({
  port: 8080,
});

// interface User {
//     socket: WebSocket;
//     name: string;
// }

let allSockets: WebSocket[] = [];

let userCount = 0;

wss.on("connection", (socket) => {
  allSockets.push(socket);

  userCount = userCount + 1;
  console.log("client connected" + `Current Users ${userCount}`);

  socket.on("message", (message) => {
    console.log("message Recieved " + message.toString());
    allSockets.forEach((s) => {
      s.send(message.toString() + ": sent from the server");
    });
  });

  socket.on("disconnect", () => {
    allSockets = allSockets.filter((s) => s != socket);

  })
});
