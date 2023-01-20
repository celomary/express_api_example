const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const jwtStrategy = require("./src/controllers/passport/jwtStrategy.controller.js");
const googleStrategy = require("./src/controllers/passport/googleStategy.controller.js");
const url = require("./src/config/db.config.js").url;
const feedRoute = require("./src/routes/feed.routes.js").feedRoute;
const app = express();

mongoose.set("strictQuery", true);
app.use(bodyParser.json());
app.use("/feeds", feedRoute);
app.use("/users", require("./src/routes/user.routes.js"));
app.use("/auth", require("./src/routes/auth.routes.js"));
app.use(passport.initialize());
app.use(passport.session());
passport.use("jwt", jwtStrategy);
passport.use("google", googleStrategy);
app.listen(3000, () => {
  console.log("IT WORKS");
  mongoose
    .connect(url)
    .then(() => {
      console.log("DB WORKS");
    })
    .catch((err) => {
      console.log("PROBLEM HAPPENS");
    });
});
