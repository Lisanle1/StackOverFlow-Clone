const express = require("express");
const router = express.Router();
const questionRouter = require("./question.router");
const answerRouter = require("./answer.router");
const commentRouter = require('./comment.router')

router.get("/", (req, res) => {
  res.send("Welcome to stack overflow clone");
});

router.use("/question", questionRouter);
router.use("/answer", answerRouter);
router.use('/comment', commentRouter)

module.exports = router;
