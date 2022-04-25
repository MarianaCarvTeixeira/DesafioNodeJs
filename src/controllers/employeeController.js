const Employes = require("../models/employes");
const moment = require("moment");

module.exports = {
  async store(req, res) {
    const { name, cpf, office, birthday } = req.body;

    const employee = {
      name,
      cpf,
      office,
      birthday :  moment(birthday, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS"),
      situation: "activate"
    };

    try {
        await Employes.create(employee);
  
        res.status(201).json({
          name: employee.name,
          cpf: employee.cpf,
          office: employee.office,
          birthday: employee.birthday,
          situation: employee.situation,
        });
      } catch (error) {
        res.status(400).json(console.log(error));
      }
  },
};
