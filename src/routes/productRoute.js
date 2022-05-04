const { Router } = require("express");
const ProductsController = require("../controllers/productController")

const router = Router();

router.post("/",ProductsController.store);
router.get("/",ProductsController.index);


module.exports = router;