const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required!!"],
    unique: [true, "Email exist!!"],
    validate: function (value) {
      return validator.isEmail(value);
    },
  },
  password: {
    type: String,
    required: [true, "Password is required!!"],
    minLength: [8, "The password must contain at least 8 characters"],
    select: false, //Show password or not in response,
  },
  role: {
    type: String,
    enum: ["User", "Admin", "Company"], //il n'accepte que l'une de ces 3 valeurs
    default: "User",
  },
});

//Password hashing before save
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 8);

  next();
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
