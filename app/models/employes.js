const mongoose = require("mongoose");

const office = Object.freeze({
  Gerente: "gerente",
  Vendedor: "vendedor",
  Caixa: "caixa",
});

const Employes = mongoose.model("Employes", {
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  office: {
    type: String,
    enum: Object.values(office),
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  situation: String,
});

module.exports = Employes;
