const controllers = {};

//TODO: Add controllers as needed.
controllers.authController = require("./auth.controller");
controllers.userController = require("./user.controller");
controllers.electricistaController = require("./electricista.controller");
controllers.instalacionController = require("./instalacion.controller");
controllers.inspeccionController = require("./inspeccion.controller");

module.exports = controllers;
