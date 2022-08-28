/** @format */

const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");
router.get("/create", blogController.blog_create_get);
router.post("/create", blogController.blog_create_post);
router.get("/blogs/:id", blogController.blog_details);
router.delete("/blogs/:id", blogController.blog_delete);
router.get("/blogs", blogController.blog_index);
// router.get("/add-blog", (req, res) => {
//   console.log("request made '/add-blog'");
//   const blog = new Blog({
//     title: "blog 2",
//     snippet: "snippet .....",
//     body: "body .......",
//   });
//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });
// router.get("/all-blogs", (req, res) => {
//   console.log("request for '/all-blogs");
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });
// router.get("/single-blog", (req, res) => {
//   console.log("request for '/single-blog'");
//   Blog.findById("62bc1fdfddfd9ae458a12490")
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

module.exports = router;
