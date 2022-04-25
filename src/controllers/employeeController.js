const Employes = require("../models/employes");
const moment = require("moment");

module.exports = {
  async store(req, res) {
    const { name, cpf, office, birthday } = req.body;

    const employee = {
      name,
      cpf,
      office,
      birthday :  moment(birthday, "DD/MM/YYYY").format("YYYY-MM-DD"),
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

  async index(req, res) {
    const { name, office } = req.params;

    try {
        const employes = await Employes.find({where: {name} && {office}});
  
        res.status(201).json({employes});
      } catch (error) {
        res.status(400).json(console.log(error));
      }
  },
  async update(req, res) {
    const { name, office, situation } = req.body;

    try {
        await Employes.updateOne();
  
        res.status(201).json({Employes});
      } catch (error) {
        res.status(400).json(console.log(error));
      }
  },
  async delete(req, res) {
    const { name, office, situation } = req.body;

    try {
        await Employes.deleteOne();
  
        res.status(201).json({Employes});
      } catch (error) {
        res.status(400).json(console.log(error));
      }
  },
};
