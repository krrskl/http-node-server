const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connected");
  socket.destroy(); // simulate connection reset by peer
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("Server listening on port 3000");
});

const client = net.createConnection({ port: 3000 }, () => {
  console.log("Connected to server");
});

client.on("error", (err) => {
  console.error("Error:", err);
});
