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
  cpf: {
    type: Number,
    required: true,
  },
  office: {
    type: String,
    required: true,
    enum: ["gerente", "vendedor", "caixa"],
  },
  birthday: {
    type: Date,
    required: true,
  },
  situation: String,
});

const employes = mongoose.model("Employes", DataSchema);

module.exports = employes;
