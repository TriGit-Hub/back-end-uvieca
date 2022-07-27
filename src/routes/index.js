var express = require('express');
var router = express.Router();

var userRouter = require("./users.route");
var authRouter = require("./auth.router");
var clienteRouter = require("./cliente.router");
var electricistaRouter = require("./electricista.router");
var instalacionRouter = require("./instalacion.router");
var inspeccionRouter = require("./inspeccion.router");
var solicitudRouter = require("./solicitud.router");
var fileRouter = require("./file.router");


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//TODO: Add routers as needed.
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/cliente", clienteRouter);
router.use("/electricista", electricistaRouter);
router.use("/instalacion", instalacionRouter);
router.use("/inspeccion", inspeccionRouter);
router.use("/solicitud", solicitudRouter);
router.use("/archivo", fileRouter);

module.exports = router;
