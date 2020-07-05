const express = require("express");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/demo", (req, res) => {
  res.set("X-full0stacl", "4life");
  res.status(418);
  res.send("I prefer coffee");
});

app.listen(port, () => {
  console.log(`App Running on Port ${port}`);
});
