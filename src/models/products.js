const mongoose = require("mongoose");

const MUUID = require("uuid-mongodb");

const DataSchema = new mongoose.Schema({
  _id: {
    type: "object",
    value: { type: "Buffer" },
    default: () => MUUID.v1(),
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  employee_id: {
    type: String,
    required: true,
  },
});

const products = mongoose.model("Products", DataSchema);

module.exports = products;
