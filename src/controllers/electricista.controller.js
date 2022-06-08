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
            content,
        } = await Services.electricistaService.save(carnet, dui, email, nit, nombre, registro, telefono);

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));
    } catch (e) {
        next(e);
    }
};

electricistaController.findAll = async (req, res, next) => {
    try {

        const {status, content} = await Services.electricistaService.findAll();

        return res.status(200).json(ApiResponse(status, "Resultados exitosos", content));
    } catch (e) {
        next(e);
    }
}

module.exports = electricistaController;
