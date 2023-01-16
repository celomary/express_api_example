const recommandationModel =
  require("../models/recommandation.model.js").recommandationModel;

const addRecommandation = async (recommandationData) => {
  const newRecommandation = new recommandationModel(recommandationData);
  const createdRecommandation = await newRecommandation.save();
  return createdRecommandation;
};

module.exports = {
  addRecommandation,
};
