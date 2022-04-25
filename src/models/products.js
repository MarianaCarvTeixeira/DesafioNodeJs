const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Double,
    required: true,
  },
  employee_id: {
    type: String,
    required: true,
  },
});

const products = mongoose.model("Products", DataSchema);

module.exports = products;
