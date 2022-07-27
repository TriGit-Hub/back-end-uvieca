var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var fileController = require("../controllers/file.controller");

router.get("/img/:imagen", fileController.getImg);

module.exports = router;
