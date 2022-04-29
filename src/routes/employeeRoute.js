const { Router } = require("express");
const EmployesController = require("../controllers/employeeController")

const router = Router();

router.post("/", EmployesController.store);
router.get("/", EmployesController.index);
router.put("/:_id",EmployesController.update);
router.delete("/:Employes_id", EmployesController.delete);

module.exports = router;