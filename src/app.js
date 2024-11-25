const express = require("express");
const app = express();

app.get("/hello", (_req, res) =>  {
  res.status(200).send("Hello World 2!")
})
module.exports = app;
