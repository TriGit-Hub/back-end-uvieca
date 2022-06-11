const Services = {};

//TODO: Add services as needed.
Services.userService = require("./user.service");
Services.errorService = require("./error.service");
Services.clienteService = require("./cliente.service");
Services.electricistaService = require("./electricista.service");
Services.instalacionService = require("./instalacion.service");

module.exports = Services;
