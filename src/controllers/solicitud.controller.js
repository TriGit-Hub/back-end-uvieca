const ApiResponse = require("../responses/ApiResponse");
const Services = require('../services/index')

const solicitudController = {};

solicitudController.save = async (req, res, next) => {
    try {

        const {clienteId, infoFacturacion} = req.body;

        const {status, content} = await Services.solicitudService.save(clienteId, infoFacturacion,req.file);

        return res.status(200).json(ApiResponse(status, content));
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

solicitudController.findByCliente = async (req, res, next) => {
    try {

        const {id} = req.params;

        const {status, content} = await Services.solicitudService.findByCliente(id);

        if (!status) {
            return res.status(300).json(ApiResponse(status, "No hay solicitudes"));
        }

        return res.status(200).json(ApiResponse(status, "Datos encontrados", content));

    } catch (e) {
        next(e);
    }
}

solicitudController.changeStatus = async (req, res, next) => {
    try {
        const {id, nuevoEstado} = req.body;

        const {status, content} = await Services.solicitudService.changeStatus(id, nuevoEstado);

        if (!status) {
            return res.status(300).json(ApiResponse(status, "No existe esa solicitud"));
        }

        return res.status(200).json(ApiResponse(status, "Estado cambiado con exito"));

    } catch (e) {
        next(e);
    }
}

solicitudController.addElectricist = async (req, res, next) => {
    try {
        const {id, electricistaId} = req.body;

        const {status, content} = await Services.solicitudService.addElectricist(id, electricistaId);

        if (!status) {
            return res.status(300).json(ApiResponse(status, content));
        }

        return res.status(200).json(ApiResponse(status, "Electricista asignado con exito"));
    } catch (e) {
        next(e);
    }
}

module.exports = solicitudController;
