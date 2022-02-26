const { Router } = require("express");
const { addUser } = require("./userControllers");
const userRouter = Router();
const { hashPass } = require("./middleware/index.js");

userRouter.post("/user", hashPass, addUser);

module.exports = userRouter;
