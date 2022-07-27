var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');
var multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/img')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + (Math.round(Math.random() * 1E9) + "-" +file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({storage: storage})

var clienteController = require("../controllers/cliente.controller");

//CREATE
router.post("/crear", upload.array('files', 3), clienteController.save);

//READ
router.get("/todos", clienteController.findAll);
router.get("/porNit/:nit", clienteController.findByNit);

//UPDATE

router.put("/actualizar", clienteController.update);

//DELETE

module.exports = router;
