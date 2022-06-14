const ApiResponse = require("../responses/ApiResponse");
const Services = require('../services/index')

const inspeccionController = {};

inspeccionController.save = async (req, res, next) => {
    try {
        const {clienteId} = req.body;

        const {status, content} = await Services.solicitudService.save(clienteId);

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));
    } catch (e) {
        console.log(e);
        next(e);
    }
};

inspeccionController.update = async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
}

module.exports = inspeccionController;
