const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const {ExtractJwt} = require("passport-jwt");
const {JWT_SECRET} = process.env;
const User = require("./models/user");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({
  "usernameField": "email"
}, async (email, password, done) => {
  try {
    // Find the user given the email
    let user = await User.findOne({
     email 
    });
    // If not, handle it

    if (!user) {
      return done(null, false);
    }

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      return done(null, false);
    }
    user = user.toObject();
    // Delete the password :)
    delete user.password;
    // Otherwise return the user
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}));