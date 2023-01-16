const feedRoute = require("express").Router();
const { addFeed, getAllFeeds } = require("../controllers/feed.controllers.js");
const recommandationFeedRouter =
  require("./recommandationFeed.routes.js").recommandationFeedRouter;

feedRoute.post("/add", async (req, res) => {
  const isCreated = await addFeed(req.body);
  if (isCreated) {
    res.status(201).json({
      status: 201,
      massage: "Feed Added Successfully!",
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "Data is not complited",
    });
  }
});

feedRoute.get("/all", async (req, res) => {
  const allFeeds = await getAllFeeds();
  res.status(200).json({
    status: 200,
    feeds: allFeeds,
  });
});

feedRoute.post("delete", (req, res) => {});

feedRoute.use("/recommandations", recommandationFeedRouter);

module.exports = {
  feedRoute,
};
