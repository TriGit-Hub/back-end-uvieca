var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var solicitudController = require("../controllers/solicitud.controller");

//CREATE
router.post("/crear", solicitudController.save);

//READ
router.get("/todos", solicitudController.findAll);
router.get("/porCliente/:id", solicitudController.findByCliente);

//UPDATE
router.put("/cambiarEstado", solicitudController.changeStatus);
router.put("/asignarElectricista", solicitudController.addElectricist);

//DELETE

module.exports = router;