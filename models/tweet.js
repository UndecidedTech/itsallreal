const mongoose = require("mongoose");

const {Schema} = mongoose;

const quoteSchema = new Schema({
  "tweetId": {
    "type": Number,
    "required": true
  },
  "text": {
    "type": String,
    "required": true
  },
  "user_name": {
    "type": String,
    "required": true
  },
  "screen_name": {
    "type": String,
    "required": true
  },
  "description": {
    "type": String,
    "required": true
  },
  "url": {
    "type": String,
    "required": true
  },
  "created_at": {
    "type": Date,
    "required": true
  },
  "profile_url": {
    "type": String,
    "required": true
  },
  "profile_image_url": {
    "type": String,
    "required": true
  }
});

const tweetSchema = new Schema({
  "tweetId": {
    "type": String,
    "required": true
  },
  "state": {
    "type": String,
    "uppercase": true
  },
  "user_name": {
    "type": String,
    "required": true
  },
  "screen_name": {
    "type": String,
    "required": true
  },
  "text": {
    "type": String,
    "required": true
  },
  "uploaded_on": {
    "type": String,
    "required": true
  },
  "uploaded_by": {
    "type": String,
    "required": true
  },
  "user_id": {
    "type": String,
    "required": true
  },
  "created_at": {
    "type": Date,
    "required": true
  },
  "avi": {
    "type": String,
    "required": true,
    "default": "no_image"
  },
  "quotedTweet": {
    "type": quoteSchema,
    "required": false
  }
});


const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;