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
  situation: {
    type: String,
    enum: ["activate", "deactivate"],
  },
});

const Employes = mongoose.model("Employes", DataSchema);

module.exports = Employes;
