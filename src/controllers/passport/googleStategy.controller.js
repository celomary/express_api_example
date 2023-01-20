var GoogleStrategy = require("passport-google-oauth20").Strategy;
const userModel = require("../../models/user.model.js").userModel;
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports = new GoogleStrategy(
  {
    clientID: process.env.E_GOOGLE_CLIENT_ID,
    clientSecret: process.env.E_GOOGLE_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, cb) {
    userModel
      .findOne({
        google_id: profile.id,
      })
      .then(async (user) => {
        if (!user) {
          const newUser = new userModel({
            google_id: profile.id,
            name: profile.displayName,
            username: profile.name.givenName,
            password: await bcrypt.hash(
              require("../../utils/passwordGenerator.js")(12),
              +process.env.E_SALT
            ),
          });
          await newUser.save();
          cb(null, {
            username: profile.name.givenName,
            name: profile.displayName,
          });
        } else {
          cb(null, {
            username: user.username,
            name: user.name,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        cb(null, {
          user: null,
        });
      });
  }
);
