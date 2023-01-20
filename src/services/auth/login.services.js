const userModel = require("../../models/user.model.js").userModel;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = async (username, password) => {
  try {
    const user = await userModel.findOne({ username });
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return null;
    return jwt.sign(
      {
        username: user.username,
        name: user.name,
      },
      process.env.E_JWTSECRET,
      {
        expiresIn: 120,
      }
    );
  } catch (e) {
    return null;
  }
};
