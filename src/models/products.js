var uuid = require("node-uuid");
const mongoose = require("mongoose");

require("mongoose-uuid4").loadType(mongoose);
var UUID = mongoose.Types.UUID;

const DataSchema = new mongoose.Schema({
  _id: {
    type: UUID,
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
