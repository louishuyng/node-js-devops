const server = require("../server");

server.get("/", (_, res) => {
  res.send("hello world");
});
