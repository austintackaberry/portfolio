const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}
app.use(express.static("public"));

app.listen(process.env.PORT || 3001);
console.log("listening on 3001");

module.exports = app;
