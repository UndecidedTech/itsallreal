/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-process-env */
/* eslint-disable strict */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");


// Connection string info
const db_ip = process.env.DB_IP;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;

const url = `mongodb://${db_user}:${db_pass}@${db_ip}:27017/Dev?authSource=admin`;

// Express app initialization

const app = express();

// Middleware

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors({
  "credentials": true,
  "methods": ["OPTIONS", "GET", "POST", "PUT"],
  "origin": ["http://localhost:8081", "http://localhost:8080"]
}));


mongoose.connect(url, {
  "useFindAndModify": false,
  "useNewUrlParser": true,
  "useUnifiedTopology": true
});
mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);

// eslint-disable-next-line no-magic-numbers, no-undef
const port = process.env.PORT || 3000;

// Import routes
const tweets = require("./routes/tweets")
app.use("/api/tweets", tweets)
// Need a users route, documents route

app.use(express.static("./frontend/public"));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server started on port ${port}`));