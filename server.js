const WebSocket = require("ws");

let ws = new WebSocket.Server({ port: 5500 });

var id = 1;

ws.on("connection", (w, req) => {
  console.log(ws.address(), ws);
  //   console.log(w, "moon", req, "test");
  ++id;
  console.log("New cline connected");
  ws.send("tets");

  w.on("close", (w) => {
    console.log("New cline disconnected");
  });

  w.on("error", (e) => {
    console.log("err");
  });
  w.onmessage = (e) => {
    ws.clients.forEach((client) => {
      console.log(client);
      client.send(e.data);
    });
  };
});

// const express = require("express");
// const http = require("http");
// const WebSocket = require("ws");

// const port = 5500;
// const server = http.createServer(express);
// const wss = new WebSocket.Server({ server });

// wss.on("connection", function connection(ws) {
//   ws.on("message", function incoming({ data }) {
//     wss.clients.forEach(function (client) {
//       client.send(data);
//     });
//   });
// });

// server.listen(port, function () {
//   console.log(`Server is listening on ${port}!`);
// });
