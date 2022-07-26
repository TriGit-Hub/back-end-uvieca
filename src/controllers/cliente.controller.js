const ApiResponse = require("../responses/ApiResponse");
const Services = require('../services/index')

const clienteController = {}

clienteController.save = async (req, res, next) => {
    try {
        const {
            act_economica,
            email,
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
        } = await Services.clienteService.save(act_economica, email, nit, constitucion_empresa, nrc, nombre, razon_social, telefono);

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));
    } catch (e) {
        next(e);
    }
};

clienteController.findAll = async (req, res, next) => {
    try {
        const {status, content} = await Services.clienteService.findAll();

        if(!status){
            return res.status(200).json(ApiResponse(status, "No se obtuvieron resultados", content));
        }

        return res.status(200).json(ApiResponse(status, "Resultados exitosos", content));
    } catch (e) {
        next(e);
    }
}

clienteController.findByNit = async (req, res, next) => {

    try {
        const {nit} = req.params;

        const {status, content} = await Services.clienteService.findByNit(nit);

        if(!status){
            return res.status(200).json(ApiResponse(status, "No se obtuvieron resultados", null));
        }

        return res.status(200).json(ApiResponse(status, "Resultados exitosos", content));
    } catch (e) {
        next(e)
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
