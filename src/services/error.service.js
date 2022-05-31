const ServiceResponse = require("../responses/ServiceResponse");
const Errors = require('../errors');
const errorModel = require('../models/error.model');

const errorService = {}

//TODO: Change error attributes as needed
errorService.save = async (errorCode, description, statusCode) => {

}


module.exports = errorService;
