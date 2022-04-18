const { Router } = require("express");
const EmployesController = require("../controllers/employes");
const employesController = new EmployesController();
const router = Router();

router.post("/", employesController.store);
router.get("/", employesController.store);
router.put("/", employesController.store);
router.delete("/", employesController.store);

module.exports = router;
