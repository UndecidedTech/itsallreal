const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {Schema} = mongoose;

const userSchema = new Schema({
  "email": {
    "type": String,
    "required": true
  },
  "username": {
    "type": String,
    "required": true,
    "unique": true
  },
  "password": {
    "type": String,
    "required": true
  }, // change to ENUM
  "role": {
    "type": String,
    "default": "admin"
  },
  "avi": {
    "type": String,
    "default": "https://tutorialheaven.s3.us-east-2.amazonaws.com/defaultAvatar.png"
  }
});

userSchema.pre("save", async function(next) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Generate salted password hash
    const passwordHash = await bcrypt.hash(this.password, salt);
    // Assign hashed password over original
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function(newPassword) {
  try {
    return bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model("users", userSchema);

module.exports = User;