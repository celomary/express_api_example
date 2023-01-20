const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: String,
  password: {
    type: String,
    required: true,
  },
  google_id: {
    type: String,
  },
});

const UserModel = model("User", UserSchema);

module.exports = {
  userModel: UserModel,
};
