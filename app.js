/** @format */
const express = require("express");
const { rearg } = require("lodash");
const app = express();
app.listen(3001);
app.get("/", (req, res) => {
  //   res.send("<p>hey its response to your request");
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
//redirect
app.get("/about_", (req, res) => {
  res.redirect("/");
});
//use this if any link didn't matched up there
app.use((req, res) =>
  res.status(404).sendFile("./views/page404.html", { root: __dirname })
);
