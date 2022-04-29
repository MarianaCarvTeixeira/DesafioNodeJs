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

    const employee = {
      name,
      office
    };

    try {
      const employes = await Employes.find({$and: [ {'name': { $regex: '^' + employee.name, $options: 'i' }}, { 'office': { $regex: '^' + employee.office, $options: 'i' }}]});

      res.status(201).json({ employes });
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },
  async update(req, res) {
    const { name, office, situation } = req.body;

    const findEmployee = await Employes.findById( req.params._id,)

    const employee = {
      name,
      office,
      situation,
    };

    try {
      await Employes.updateOne( findEmployee, employee, {new:true});

      res.status(201).json({
        name: employee.name,
        cpf: findEmployee.cpf,
        office: employee.office,
        birthday: findEmployee.birthday,
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
