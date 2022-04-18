const Employes = require("../models/employes");
class EmployesController{


    async store(req, res) {

    const { name, cpf, office, birthday, situation } = req.body;
  
      const employee = {
          name,
          cpf,
          office,
          birthday,
          situation
      }
  
      try{
          await Employes.create(employee)
  
          res.status(201).json(employee)
      }
      catch(error){
          res.status(400).json({error: error})
      }
  };
  async getEmployes(req, res) {
  
      try{
        const employee = await Employes.find()
  
          res.status(201).json(employee)
      }
      catch(error){
          res.status(400).json({error: error})
      }
  };
  
}

module.exports = EmployesController