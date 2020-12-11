/* eslint-disable strict */
require("dotenv").config();
const Twitter = require("twitter");
const express = require("express");
const consumer_key = process.env.TWITTER_CONSUMER_API_KEY;
const consumer_secret = process.env.TWITTER_CONSUMER_API_SECRET;
const access_token_key = process.env.TWITTER_ACCESS_TOKEN;
const access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

const client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
});


const Tweet = require("../models/tweet.js");

console.log("FCKEYS: ", {consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret});


async function getTweets(lastId) {
  try {
    const params = {"screen_name": "smarter411"};

    if (lastId) {
      params.since_id = lastId;
    } else {
      params.count = 1;
    }
    return await samClient.get("statuses/user_timeline", params);
  } catch (e) {
    console.error(e);
  }
}

const router = express.Router();

router.post("", async(req, res) => {
  try {
    const {tweet_url, state} = req.body;
    console.log(tweet_url, state);
    const new_tweet = tweet_url.split("/");
    console.log(new_tweet);
    twitter_id = new_tweet[3];
    tweet_type = new_tweet[4];
    tweet_id = new_tweet[5];
    console.log(twitter_id, tweet_type, tweet_id);
    const tweet = await client.get("statuses/show", {"id": tweet_id});


    console.log(tweet);

    const tweetObj = {
      "uploaded_by": "urmom",
      "uploaded_on": new Date(),
      "tweetId": tweet_id,
      "user_name": tweet.user.name,
      "screen_name": tweet.user.screen_name,
      "text": tweet.text,
      "user_id": tweet.user.id_str,
      "created_at": tweet.created_at,
      "avi": tweet.user.profile_image_url,
      state
    };

    if (tweet.quoted_status) {
      tweetObj.quotedTweet = {
        "tweetId": tweet.quoted_status.id_str,
        "text": tweet.quoted_status.text,
        "userId": tweet.quoted_status.user.id_str,
        "user_name": tweet.quoted_status.user.name,
        "screen_name": tweet.quoted_status.user.screen_name,
        "description": tweet.quoted_status.user.description,
        "url": tweet.quoted_status.user.url,
        "created_at": tweet.quoted_status.user.created_at,
        "profile_url": tweet.quoted_status.user.url,
        "profile_image_url": tweet.quoted_status.user.profile_image_url
      };
    }


    const saveTweet = await new Tweet(tweetObj).save();
    console.log(saveTweet);
    res.send(saveTweet.toObject());
  } catch (e) {
    console.error(e);
  }
});


router.get("/", async (req, res) => {
  const {state} = req.query;
  let tweetsList = [];
  if (state) {
    tweetsList = await Tweet.find({state});
  } else {
    tweetsList = await Tweet.find();
  }

  res.send(tweetsList);

});

module.exports = router;