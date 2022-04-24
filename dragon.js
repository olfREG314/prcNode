/** @format */
// ---------------------------------------------------------
// some basic of TIMEOUT & INTERVAL
// ----------------------------------------------------------
// setTimeout(() => {
//   console.log("I am dead");
//   clearInterval(int);
// }, 3000);
// const int = setInterval(() => {
//   console.log("hey I am printing");
// }, 1000);
// ---------------------------------------------------------
// IMPORTING from another file
// ----------------------------------------------------------
// importing sigle var from anotherFile.js
// const xyz = require("./anotherFile");
//better way of doing it, remember to export
// const { abc } = require("./anotherFile");
// console.log(abc);
// -----------------------------------------------------------
// importing CORE MODULES
// ------------------------------------------------------------
// const os = require("os");
// console.log(os); //theres a lost of obj & func
// console.log(os.platform);
// console.log(os.platform(), os.homedir());
// -----------------------------------------------------------
// using FILESYSTEM module to read,write,create,delete
// ---------------------------------------------------------
//  const fs = require("fs");
// fs.readFile("./textDoc.txt", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data.toString()); //need to chng the buffer to string
// }); //takes loc. & a func
// fs.writeFile("./textDoc.txt", "HEY I AM THE NEW LINE", () => {
//   console.log("done writing");
//   fs.readFile("./textDoc.txt", (err, data) => {
//     if (err) console.log(err);
//     else console.log(data.toString()); //need to chng the buffer to string
//   });
// });
// if (!fs.existsSync("./newDir")) {
//   fs.mkdir("./newDir", (err) => {
//     if (err) console.log(err);
//     else console.log("created dir");
//   });
// } else {
//   fs.rmdir("./newDir", (err) => {
//     if (err) console.log(log);
//     else console.log("deleted dir");
//   });
// }
//
// -----------------------------------------------------------
// using FILESYSTEM module to import stream of data
// ---------------------------------------------------------
//  const fs = require("fs");
// const readStream = fs.createReadStream("./textDoc.txt", { encoding: "utf8" });
// readStream.on("data", (chunk) => {
//   console.log("-----new chunk---------\n");
//   console.log(chunk);
// });
// -----------------------------------------------------------
// creating SERVER
// ---------------------------------------------------------
// const http = require("http"); //creating server
// const fs = require("fs"); //accessing filesystem, os level
// const _ = require("lodash"); //basic math func.
// const server = http.createServer((req, res) => {
//   console.log("request made");
//   let n = _.random(0, 20); //one of the func.
//   console.log(n);
//   let path = "./views/";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       break;
//     case "/about":
//       path += "about.html";
//       break;
//     default:
//       path += "page404.html";
//   }
//   res.setHeader("content-Type", "text/html");
//   res.write("hey server is working");
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// });
// server.listen(3000, "localhost", () =>
//   console.log("linsting on port 3000 on localhost")
// );
