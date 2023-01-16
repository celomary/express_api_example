const {
  addRecommandation,
} = require("../controllers/recommandationFeed.controller.js");
const { getFeedById } = require("../controllers/feed.controllers.js");
const recommandationFeedRouter = require("express").Router();

recommandationFeedRouter.post("/:feed_id/add", async (req, res) => {
  const myFeed = await getFeedById(req.params.feed_id);
  if (myFeed) {
    const addedRecommandation = await addRecommandation(req.body);
    myFeed.recommandations.push(addedRecommandation);
    await myFeed.save();
    res.status(201).json({
      status: 201,
      message: "Recommandation Add And it assigned to Feed",
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "Feed Doesn't exist",
    });
  }
});

module.exports = {
  recommandationFeedRouter,
};
