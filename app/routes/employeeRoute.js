const router = require("express");
const employesController = require("../controllers/employes");

router.post("/api/v1/employee", employesController);

module.exports = router;
