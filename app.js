/** @format */
const credentials = require("./credentials.js");
const express = require("express");
const app = require("express")();
const { rearg } = require("lodash");
const mongoose = require("mongoose");
const { render } = require("ejs");
const blogRoutes = require("./routes/blogRoutes.js");
const PORT = 3000;
// ============================================
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@awesome.ufhkj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// =============================================
// ===connect to mongoDB==========================
const dbURL = `mongodb+srv://forPrcNode:${credentials.PSSWD}_forPrcNode@awesome.ufhkj.mongodb.net/firstDB?retryWrites=true&w=majority`;

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Conneted to mongoDB");
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// const blogs = [
//   { title: "ABC", snippet: "hey its the 1st blog titled abc... weired" },
//   { title: "DEF", snippet: "so its the 2nd one... this one nrml" },
//   { title: "GHI", snippet: "3rd one is dangerous" },
// ];

app.get("/", (req, res) => {
  console.log("request made '/index'");
  res.redirect("/blogs");
  //   res.send("<p>hey its response to your request");
  // res.sendFile("./views/index", { root: __dirname });
  // res.render("index", { title: "Home" }); //passed the title to index.ejs
});
app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  console.log("request made '/about'");
  res.render("about", { title: "about" }); // =blogs:blogs
});
//redirect
app.get("/about_", (req, res) => {
  console.log("request made '/about_'");
  res.redirect("/about");
});

app.use(blogRoutes);
// app.use("/blogs",blogRoutes)//makes much more reusable

//use this if any link didn't matched up there
app.use((req, res) =>
  // res.status(404).sendFile("./views/page404.html", { root: __dirname })
  res.status(404).render("page404", { title: "404" })
);
