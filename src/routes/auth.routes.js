const authRouter = require("express").Router();
const passport = require("passport");
const loginService = require("../services/auth/login.services.js");

authRouter.post(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.cookie = req.cookies;
    res.status(200).json({
      user: req.user,
    });
  }
);

authRouter.post("/login", async (req, res) => {
  const token = await loginService(req.body.username, req.body.password);
  if (token) {
    res.status(201).json({
      token,
    });
  } else {
    res.status(401).json({
      status: 401,
      message: "username and/or password are incorrect",
    });
  }
});

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    res.status(200).json({
      status: 200,
      message: "worked",
    });
  }
);
module.exports = authRouter;
