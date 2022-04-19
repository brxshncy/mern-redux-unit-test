const tweetRouterExpress = require("express");
const tweetRouter = tweetRouterExpress.Router();

const {
  postTweet,
  getTweets,
  updateTweet,
  deleteTweet,
} = require("../controllers/TweeterController.jsx");

tweetRouter.route("/").get(getTweets).post(postTweet);
tweetRouter.route("/:id").put(updateTweet).delete(deleteTweet);

module.exports = tweetRouter;
