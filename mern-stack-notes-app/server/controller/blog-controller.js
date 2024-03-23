const mongoose = require("mongoose");
const Blog = require("../model/Blog");

const fetchBlogs = async (req, res) => {
  let listOfBlogs;
  try {
    listOfBlogs = await Blog.find();
  } catch (e) {
    console.log(e);
  }
  if (!listOfBlogs) return res.status(404).json({ message: "No blogs found" });
  return res.status(200).json(listOfBlogs);
};

const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();
  const newBlog = new Blog({ title, description, date: currentDate });

  try {
    await newBlog.save();
  } catch (e) {
    console.log(e);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session: session });
    await session.commitTransaction();
  } catch (e) {
    return res.status(500).json({ message: e });
  }
  return res.status(201).json({ newBlog });
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  let blogToUpdate;

  try {
    blogToUpdate = await Blog.findByIdAndUpdate(id, { title, description });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
  if (!blogToUpdate)
    return res.status(500).json({ message: "Unable to update blog" });
  return res.status(200).json(blogToUpdate);
};
module.exports = { fetchBlogs, addNewBlog, deleteBlog, updateBlog };
