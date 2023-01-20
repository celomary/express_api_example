const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const userModel = require("../../models/user.model.js").userModel;
require("dotenv").config();
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.E_JWTSECRET;

module.exports = new JwtStrategy(opts, function (payload, done) {
  userModel.findOne({ username: payload.username }, function (err, user) {
    if (err) {
      return done(err, false);
    }
    console.log(payload.exp * 1000 < Date.now());
    if (user) {
      return done(null, payload);
    } else {
      return done(null, false, {
        status: 400,
        message: "username is incorrect",
      });
      // or you could create a new account
    }
  });
});
