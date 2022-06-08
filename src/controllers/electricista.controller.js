const ApiResponse = require("../responses/ApiResponse");
const DTO = require('../dto');
const Services = require('../services/index')

const electricistaController = {}

electricistaController.save = async (req, res, next) => {
    try {
        const {
            carnet,
            dui,
            email,
            nit,
            nombre,
            registro,
            telefono
        } = req.body;

        const {
            status,
            content
        } = await Services.electricistaService.save(carnet, dui, email, nit, nombre, registro, telefono);

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));
    } catch (e) {
        next(e);
    }
};

electricistaController.findAll = async (req, res, next) => {
    try {

        const {status, content} = await Services.electricistaService.findAll();

        if (!status) {
            return res.status(200).json(ApiResponse(status, "No se obtuvieron resultados", content));
        }

        return res.status(200).json(ApiResponse(status, "Resultados exitosos", content));
    } catch (e) {
        next(e);
    }
}

electricistaController.findByDui = async (req, res, next) => {
    try {

        const {dui} = req.params;

        const {status, content} = await Services.electricistaService.findByDui(dui);

        if (!status) {
            return res.status(200).json(ApiResponse(status, "No se obtuvieron resultados", content));
        }

        return res.status(200).json(ApiResponse(status, "Resultados exitosos", content));
    } catch (e) {
        next(e);
    }
}

electricistaController.update = async (req, res, next) => {
    try {
        const {status, content} = await Services.electricistaService.update(req.body);

        return res.status(200).json(ApiResponse(status, "Actualizado con exito", content));
    } catch (e) {
        next(e);
    }
}

module.exports = electricistaController;
