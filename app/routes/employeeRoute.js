const { Router } = require("express");
const EmployesController = require("../controllers/employes");
const employesController = new EmployesController();
const router = Router();

router.post("/", employesController.store);
router.get("/", employesController.getEmployes);
router.put("/", employesController.updateEmployes);
router.delete("/", employesController.deleteEmployes);

module.exports = router;
