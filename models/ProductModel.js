const mongoose = require("mongoose");

const ProductModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductModel);

module.exports = Product;
