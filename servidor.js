const express = require("express");
const app = express();

app.get("/", Hello World);

function hw(req, res)
{
  res.send("Hello World");
}

app.listen(8989);
