const mongoose = require("mongoose");

const {Schema} = mongoose;

const ArticleSchema = new Schema({
    "state": {
        'type' : String,
        'required': true
    }

})
