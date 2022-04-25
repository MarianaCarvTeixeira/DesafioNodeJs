const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
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

const employes = mongoose.model("Employes", DataSchema);

module.exports = employes;
