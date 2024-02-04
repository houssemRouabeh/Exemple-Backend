const express = require("express");
const root = express.Router();
const registerController = require("../controllers/UserControllers/registerController");
const loginController = require("../controllers/UserControllers/loginController");

root
  .post("/register", registerController.addUser)
  .post("/login", loginController.login);

module.exports = root;
