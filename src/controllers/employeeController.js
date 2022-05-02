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

    const Birthday = moment(employee.birthday).isSameOrBefore(moment().subtract(15, 'year'));
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
      res.status(400).json();
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
      res.status(400).json();
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

    const formatedCpf = findEmployee.cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

    try {
      await Employes.updateOne( findEmployee, employee, {new:true});

      res.status(201).json({
        id: findEmployee._id,
        name: employee.name,
        cpf: formatedCpf,
        office: employee.office,
        birthday: findEmployee.birthday,
        situation: employee.situation,
      });
    } catch (error) {
      res.status(400).json();
    }
  },
  async delete(req, res) {
    const _id = req.params;

    try {
      await Employes.deleteOne(_id);

      res.status(204).json();
    } catch (error) {
      res.status(400).json();
    }
  },
};
