// const { send } = require("process");

// btn.onclick = () => {
let socket = new WebSocket("ws://localhost:5500/index.html");

socket.onopen = (e) => {
  console.log("connected", e);
};
socket.onmessage = ({ data }) => {
  let div = document.createElement("div");
  div.innerHTML = data;

  msg.append(div);
};
// };

send.onclick = () => {
  socket.send(value.value);
};
