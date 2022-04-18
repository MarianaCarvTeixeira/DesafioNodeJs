const mongoose = require("mongoose");

const Employes = mongoose.model("Employes", {
  id: Number,
  name: String,
  cpf: String,
  office: String,
  birthday: Date,
  situation: Boolean,
});

module.exports = Employes;
