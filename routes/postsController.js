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

router.post("/", (req, res) => {
  try {
    const newRecord = new PostModel({
      author: req.body.author,
      message: req.body.message,
    });

    newRecord.save((err, docs) => {
      if (!err) res.send(docs);
      else log("error creating data : " + err);
    });
  } catch {}
});

module.exports = router;
