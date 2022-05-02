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

    const singleCpf = await Employes.findOne({ cpf: { $eq: employee.cpf } })
    if(singleCpf){
      res.status(404).json({message: 'CPF já está cadastrado.'});
    }

    const formatedCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

    const Birthday = moment(birthday).isSameOrBefore(moment());
    if (!Birthday){
      res.status(404).json({message: 'Data de nascimento inválida.'});
    }

    try {
      await Employes.create(employee);

      res.status(201).json({
        name: employee.name,
        cpf: formatedCpf,
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
        id: findEmployee._id,
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
