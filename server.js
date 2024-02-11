const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./config/connect/dbConnect");
connectDb();
const userRoot = require("./roots/userRoots");
const productRoot = require("./roots/productRoots");
app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/user", userRoot);
app.use("/product", productRoot);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
