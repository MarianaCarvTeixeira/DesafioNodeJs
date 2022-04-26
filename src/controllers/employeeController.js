const Employes = require("../models/employes");
const moment = require("moment");
const { findOne } = require("../models/employes");

module.exports = {
  async store(req, res) {
    const { name, cpf, office, birthday } = req.body;

    const employee = {
      name,
      cpf,
      office,
      birthday: moment(birthday, "DD/MM/YYYY").format("YYYY-MM-DD"),
      situation: "activate",
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
      const employes = await Employes.find( where= { name } && { office } );

      res.status(201).json({ employes });
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },
  async update(req, res) {
    const { name, office, situation } = req.body;

    const employee = {
      name,
      office,
      situation,
    };

    try {
      await Employes.updateOne();

      res.status(201).json({
        name,
        cpf:Employes.cpf,
        office,
        birthday: Employes.birthday,
        situation: employee.situation,
      });
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },
  async delete(req, res) {
    try {
      await Employes.deleteOne();

      res.status(204).json();
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },
};
