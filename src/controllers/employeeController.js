const Employes = require("../models/employes");
const moment = require("moment");

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
    const { name, office } = req.body;

    try {
      const employes = await Employes.find({name: new RegExp('^'+name+'$')}&&{office: new RegExp('^'+office+'$')});

      res.status(201).json({ employes });
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },
  async update(req, res) {
    const { _id, name, office, situation } = req.body;

    const employee = {
      name,
      office,
      situation,
    };

    try {
      await Employes.updateOne({ _id });

      res.status(201).json({
        name: employee.name,
        cpf: Employes.cpf,
        office: employee.office,
        birthday: Employes.birthday,
        situation: employee.situation,
      });
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },
  async delete(req, res) {
    const _id = req.params;

    try {
      await Employes.deleteOne(_id);

      res.status(204).json();
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },
};
