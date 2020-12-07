const mongoose = require("mongoose");

const {Schema} = mongoose;

const tweetSchema = new Schema({
  "tweetId": {
    "type": mongoose.SchemaTypes.ObjectId,
    "required": true
  },
  "state": {
      'type': String,
      'uppercase' : true,
  }, 
  "author": {
      'type': String, 
      'required': true
  },
  "uploaded_on": {
      'type': String,
      'required': true,
  },
  "uploaded_by": {
      'type' : String,
      'required' :true
  },
  "avi": {
      'type': String,
      'required': true,
      'default': 'no_image'
  }
});


const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;