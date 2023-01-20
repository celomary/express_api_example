const userRoute = require("express").Router();
const { userRegister } = require("../controllers/user.controllers.js");
userRoute.post("/register", async (req, res) => {
  const isCreated = await userRegister(req.body);
  if (isCreated) {
    res.status(200).json({
      status: 200,
      message: "user has been created",
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "invalid user data",
    });
  }
});

module.exports = userRoute;
