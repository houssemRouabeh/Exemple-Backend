const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database conected ");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports = connectDb;
