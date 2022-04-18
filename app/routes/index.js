const { Router } = require("express");
const Employes = require('./employeeRoute');
const Products = require('./productRoute');

const router = Router();

router.use('/api/v1/employee', Employes);

router.get('/', async (req, res) => {
    res.send('api running!'); 
});

module.exports = router;