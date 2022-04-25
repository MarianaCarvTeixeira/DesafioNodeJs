const { Router } = require("express");
const EmployesController = require("../controllers/employeeController")

const router = Router();

router.post("/", EmployesController.store);
router.get("/", EmployesController.index);
router.put("/:employee_id",EmployesController.update);
router.delete("/:employee_id", EmployesController.delete);

module.exports = router;