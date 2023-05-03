const express = require("express");
const router = express.Router();

const { PostsModel } = require("../models/postsModels");

router.get("/", async (req, res) => {
  try {
    const docs = await PostsModel.find();
    console.log(docs);
    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newRecord = new PostsModel({
      author: req.body.author,
      message: req.body.message,
    });

    const savedRecord = await newRecord.save();
    res.send(savedRecord);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
