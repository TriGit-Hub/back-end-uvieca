var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var solicitudController = require("../controllers/solicitud.controller");

var multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/img')
    },
    filename: function (req, file, cb) {
        const unique = Date.now() + '-' + (Math.round(Math.random() * 1E9))
        cb(null, `f-${unique}-${file.originalname}`)
    }
})

const upload = multer({storage: storage})

//CREATE
router.post("/crear", upload.single("file", 1), solicitudController.save);

//READ
router.get("/todos", solicitudController.findAll);
router.get("/porCliente/:id", solicitudController.findByCliente);

//UPDATE
router.put("/cambiarEstado", solicitudController.changeStatus);
router.put("/asignarElectricista", solicitudController.addElectricist);

//DELETE
router.get("/delete/todos", solicitudController.deleteAll);
module.exports = router;
