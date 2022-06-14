const ApiResponse = require("../responses/ApiResponse");
const Services = require('../services/index')

const solicitudController = {};

solicitudController.save = async (req, res, next) => {
    try {
        const {clienteId} = req.body;

        const {status, content} = await Services.solicitudService.save(clienteId);

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));
    } catch (e) {
        next(e);
    }
};

solicitudController.findAll = async (req, res, next) => {
    try {
        const {status, content} = await Services.solicitudService.findAll();

        if (!status) {
            return res.status(300).json(ApiResponse(status, "No hay solicitudes"));
        }

        return res.status(200).json(ApiResponse(status, "Datos encontrados", content));

    } catch (e) {
        next(e);
    }
}

solicitudController.update = async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
}

module.exports = solicitudController;
