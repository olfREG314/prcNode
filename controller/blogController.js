/** @format */

// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("blogs/index", { blogs: result, title: "blogs" });
    })
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "blogdetails" });
    })
    .catch((err) => console.log(err));
};
const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "create" });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => res.redirect("/blogs"))
    .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_details,
};
