const Products = require("../models/products");
const Employes = require("../models/employes");

module.exports = {
  async store(req, res) {
    const { employes_id, price, name, category } = req.body;

    const products = {
      employee_id: employes_id,
      name,
      category,
      price,
    };

    const findEmployee = await Employes.findById( employes_id,)

    if(findEmployee.office !== "gerente"){
      res.status(400).json({message: 'Cadastro de produtos deve ser realizado pelo gerente.'});
    }

    try {
      await Products.create(products);

      res.status(201).json({
        employes_id:products.employee_id,
        name:products.name,
        category:products.category,
        price:products.price,

      });
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },

  async index(req, res) {
    const { employee_id, category } = req.body;

    const product ={
      employee_id,
      category
    }

    try {
      const products = await Products.find(product);

      res.status(201).json({ products });
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },
};
