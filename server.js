const App = require("./app");
const express = require("express");

const PORT = process.env.PORT || 3000;

const server = App.getInstance().server;

console.log("ak hihi just for testing");

server.get("/", (_, res) => {
  res.send(`test_at_port: ${PORT}`);
});

server.listen(PORT, () => {
  console.log(`Server is listening at ${PORT} `);
});

module.exports = server;
