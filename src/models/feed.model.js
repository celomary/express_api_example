const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const FeedSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
  ],
  recommandations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recommandation",
    },
  ],
  about: String,
});

const FeedModel = model("Feed", FeedSchema);

module.exports = {
  feedModel: FeedModel,
};
