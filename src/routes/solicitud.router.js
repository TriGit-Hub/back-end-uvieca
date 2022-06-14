var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var solicitudController = require("../controllers/solicitud.controller");

//CREATE
router.post("/crear", solicitudController.save);

//READ
router.get("/todos", solicitudController.findAll);

//UPDATE

//DELETE

module.exports = router;
