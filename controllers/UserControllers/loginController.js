const mongoose = require("mongoose");
const user = require("../../models/UserModel");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    console.log(email);
    // login user

    const existUser = await user.findOne({ email: email });
    if (existUser) {
      const verifPassword = await bcrypt.compare(
        req.body.password,
        existUser.password
      );
      if (verifPassword) {
        res.json({
          messge: "user found",
        });
      }
    }
  } catch (error) {
    console.log(`Error in adding User : ${error}`);
  }
};
