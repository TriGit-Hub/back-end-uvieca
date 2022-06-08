var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var electricistaController = require("../controllers/electricista.controller");

//CREATE
router.post("/crear", electricistaController.save);

//READ
router.get("/todos", electricistaController.findAll);

//UPDATE

//DELETE

module.exports = router;
