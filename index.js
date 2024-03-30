const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/ProductModel.js");
const ProductRoute = require("./routes/ProductRoute.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ encoded: false }));

app.use("/api/products", ProductRoute);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/me", (req, res) => {
  res.send("My API is working");
});

mongoose
  .connect("mongodb+srv://****:*****@cluster0.qdroxu7.mongodb.net/Backend")
  .then(() => {
    console.log("DB connected");
    app.listen(5000, () => {
      console.log("Server started on port 5000");
    });
  })
  .catch(() => {
    console.log("DB not connected");
  });
