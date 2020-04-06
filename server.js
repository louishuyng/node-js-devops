const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
  res.send("hello world");
});

module.exports = app;
