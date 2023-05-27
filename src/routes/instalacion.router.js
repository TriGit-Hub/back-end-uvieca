var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var instalacionController = require("../controllers/instalacion.controller");

//CREATE
router.post("/crear", instalacionController.save);

//READ

router.get("/todos", instalacionController.findAll);

router.get("/porID/:id", instalacionController.findbyid);
//UPDATE
router.put("/actualizar", instalacionController.update);

//DELETE

module.exports = router;
