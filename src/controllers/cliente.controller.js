const ApiResponse = require("../responses/ApiResponse");
const Services = require('../services/index')

const clienteController = {}

clienteController.save = async (req, res, next) => {
    try {
        const {
            act_economica,
            email,
            id_instalacion,
            nit,
            constitucion_empresa,
            nrc,
            nombre,
            razon_social,
            telefono
        } = req.body;

        const {
            status,
            content
        } = await Services.clienteService.save(act_economica, email, id_instalacion, nit, constitucion_empresa, nrc, nombre, razon_social, telefono);

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));
    } catch (e) {
        next(e);
    }
};

clienteController.findAll = async (req, res, next) => {
    try {
        const {status, content} = await Services.clienteService.findAll();

        return res.status(200).json(ApiResponse(status, "Resultados exitosos", content));
    } catch (e) {
        next(e);
    }
}

clienteController.update = async (req, res, next) => {
    try {

        const {status, content} = await Services.clienteService.update(req.body);

        return res.status(200).json(ApiResponse(status, "Actualizado con exito", content));
    } catch (e) {
        next(e);
    }
}

module.exports = clienteController;
