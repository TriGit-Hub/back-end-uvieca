var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var clienteController = require("../controllers/cliente.controller");

//CREATE
router.post("/crear", clienteController.save);

//READ
router.get("/todos", clienteController.findAll);

//UPDATE

//DELETE

module.exports = router;
