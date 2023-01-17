const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const url = require("./src/config/db.config.js").url;
const feedRoute = require("./src/routes/feed.routes.js").feedRoute;
const recommandationFeedRouter =
  require("./src/routes/recommandationFeed.routes.js").recommandationFeedRouter;

const app = express();

mongoose.set("strictQuery", true);
app.use(bodyParser.json());
app.use("/feeds", feedRoute);
app.listen(3000, () => {
  console.log("IT WORKS");
  mongoose
    .connect(url)
    .then(() => {
      console.log("SERVER RUNS");
    })
    .catch((err) => {
      console.log("PROBLEM HAPPENS");
    });
});
