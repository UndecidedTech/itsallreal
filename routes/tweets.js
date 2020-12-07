require("dotenv").config();
const Twitter = require("twitter");
const discord = require("discord.js");

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