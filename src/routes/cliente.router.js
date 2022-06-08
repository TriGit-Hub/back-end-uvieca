var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var clienteController = require("../controllers/cliente.controller");

//CREATE
router.post("/crear", clienteController.save);

//READ
router.get("/todos", clienteController.findAll);
router.get("/porNit/:nit", clienteController.findByNit);

//UPDATE

router.put("/actualizar", clienteController.update);

//DELETE

module.exports = router;
