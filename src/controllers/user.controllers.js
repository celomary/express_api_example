const userModel = require("../models/user.model.js").userModel;
const bcrypt = require("bcrypt");

const userRegister = async (userData) => {
  const user = new userModel({
    username: userData.username,
    name: userData.name,
  });
  user.password = await bcrypt.hash(userData.password, +process.env.E_SALT);
  try {
    await user.save();
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = {
  userRegister,
};
