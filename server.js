const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

module.exports = app;
