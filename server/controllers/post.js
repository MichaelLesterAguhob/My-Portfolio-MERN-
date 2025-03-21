const Post = require("../models/Post");
const { errorHandler } = require("../authentication");

module.exports.uploadPost = async (req, res) => {
  try {
    const { postTitle, content, postProjectLink } = req.body;

    const newPost = new Post({
      postTitle: postTitle,
      content: content,
      postProjectLink: postProjectLink,
    });

    const uploadedPost = await newPost.save();
    if (uploadedPost) {
      res
        .status(201)
        .send({ success: true, message: "Post uploaded successfully" });
    } else {
      res
        .status(400)
        .send({ success: false, message: "Failed to upload post" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find({});
    if (allPosts) {
      res.status(200).send({ success: true, allPosts });
    } else {
      res.status(404).send({ success: false, message: "No posts found" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports.updatePost = async (req, res) => {
  try {
    const postUpdate = {
      title: req.body.title,
      content: req.body.content,
    };
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      postUpdate,
      { new: true }
    );

    if (updatedPost) {
      res
        .status(200)
        .send({ success: true, message: "Post updated successfully" });
    } else {
      res.status(404).send({ success: false, message: "No posts found" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.postId);

    if (deletedPost) {
      res
        .status(200)
        .send({ success: true, message: "Post deleted successfully" });
    } else {
      res.status(404).send({ success: false, message: "No posts found" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post) {
      res.status(200).send({ success: true, post });
    } else {
      res.status(404).send({ success: false, message: "No post found" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};
