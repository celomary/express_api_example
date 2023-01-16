const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const RecommandationSchema = new Schema({
  description: String,
  owner: String,
});

const RecommandationModel = model("Recommandation", RecommandationSchema);

module.exports = {
  recommandationModel: RecommandationModel,
};
