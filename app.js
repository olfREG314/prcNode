/** @format */
const express = require("express");
const { rearg } = require("lodash");
const app = express();
app.set("view engine", "ejs");
app.listen(3002);
app.get("/", (req, res) => {
  console.log("request made");
  //   res.send("<p>hey its response to your request");
  // res.sendFile("./views/index", { root: __dirname });
  res.render("index", { title: "Home" }); //passed the title to index.ejs
});
app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});
//redirect
app.get("/about_", (req, res) => {
  res.redirect("/");
});
//use this if any link didn't matched up there
app.use((req, res) =>
  // res.status(404).sendFile("./views/page404.html", { root: __dirname })
  res.render("page404")
);
