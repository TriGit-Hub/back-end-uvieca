var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var fileController = require("../controllers/file.controller");

router.get("/img/:imagen", fileController.getImg);
router.post("/formularioSolicitud/obtener/soli", fileController.obtenerPdfSolicitud);
router.post("/formularioSolicitud/obtener/contra", fileController.obtenerPdfContrato);
module.exports = router;
