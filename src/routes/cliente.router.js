var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var clienteController = require("../controllers/cliente.controller");

router.get("/todos", clienteController.findAll);

module.exports = router;
