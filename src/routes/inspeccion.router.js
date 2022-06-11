var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var inspeccionController = require("../controllers/inspeccion.controller");

//CREATE
router.post("/crear", inspeccionController.save);

//READ

//UPDATE

//DELETE

module.exports = router;
