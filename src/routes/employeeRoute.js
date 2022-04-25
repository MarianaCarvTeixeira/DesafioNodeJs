const { Router } = require("express");
const EmployesController = require("../controllers/employeeController")

const router = Router();

router.post("/", EmployesController.store);
router.get("/", EmployesController.index);
router.put("/:employee_id",);
router.delete("/:employee_id");

module.exports = router;