const feedModel = require("../models/feed.model.js").feedModel;

const addFeed = async (feed) => {
  try {
    const newFeed = new feedModel(feed);
    await newFeed.save();
  } catch (e) {
    return false;
  }
  return true;
};

const getAllFeeds = async () => {
  return await feedModel
    .find()
    .select(["-_id", "-__v"])
    .populate("recommandations", "-_id -__v");
};

const getFeedById = async (id) => {
  try {
    const ourFeed = await feedModel.findById(id);
    return ourFeed;
  } catch (e) {
    return null;
  }
};

module.exports = {
  addFeed,
  getAllFeeds,
  getFeedById,
};
