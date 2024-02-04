const mongoose = require("mongoose");
const user = require("../../models/UserModel");

exports.addUser = async (req, res) => {
  try {
    console.log("first");
    // create a new user
    const newUser = new user(req.body);
    if (req.body.role == "Admin") {
      res.json({
        message: "You are not authorized to perform this action",
      });
    } else {
      await newUser.save();
      res.send("newUser");
    }
  } catch (error) {
    console.log(`Error in adding User : ${error}`);
  }
};
