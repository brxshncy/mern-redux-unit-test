const asyncHandler = require("express-async-handler");

const postTweet = asyncHandler(async (req, res) => {
  res.send(req.body);
});

const getTweets = asyncHandler((req, res) => {});

const updateTweet = asyncHandler((req, res) => {});

const deleteTweet = asyncHandler((req, res) => {});

module.exports = {
  postTweet,
  getTweets,
  updateTweet,
  deleteTweet,
};
