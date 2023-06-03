var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var electricistaController = require("../controllers/electricista.controller");

//CREATE
router.post("/crear", electricistaController.save);

//READ
router.get("/todos", electricistaController.findAll);
router.get("/porDui/:dui", electricistaController.findByDui);
router.get("/porId/:id", electricistaController.findById);
//UPDATE

router.put("/actualizar", electricistaController.update);

//DELETE
router.get("/deletePorDui/:dui", electricistaController.deleteByDui);
module.exports = router;
