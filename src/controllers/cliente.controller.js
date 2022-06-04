const ApiResponse = require("../responses/ApiResponse");
const DTO = require('../dto');
const Services = require('../services/index')

const clienteController = {}

clienteController.findAll = async (req, res, next) => {
    try {
        const {status, content} = await Services.clienteService.findAll();

        return res.status(200).json(ApiResponse(status, "Resultados exitosos", content));
    } catch (e) {
        next(e);
    }
}

module.exports = clienteController;
