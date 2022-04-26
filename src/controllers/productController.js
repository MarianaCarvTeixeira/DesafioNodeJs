const Products = require("../models/products");

module.exports = {
  async store(req, res) {
    const { employes_id, price, name, category } = req.body;

    const products = {
      employes_id,
      name,
      category,
      price,
    };

    try {
      await Products.create(products);

      res.status(201).json({
        employes_id:products.employes_id,
        name:products.name,
        category:products.category,
        price:products.price,

      });
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },

  async index(req, res) {

    try {
      const products = await Products.find();

      res.status(201).json({ products });
    } catch (error) {
      res.status(400).json(console.log(error));
    }
  },
};