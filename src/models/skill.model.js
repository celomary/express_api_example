const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const SkillSchema = new Schema({
  name: String,
  feeds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Feed",
    },
  ],
});

const SkillModel = model("Skill", SkillSchema);

module.exports = {
  skillModel: SkillModel,
};
