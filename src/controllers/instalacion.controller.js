const ApiResponse = require("../responses/ApiResponse");
const Services = require('../services/index')

const instalacionController = {}

instalacionController.save = async (req, res, next) => {
    try {

        const {
            capacidad_subestacion,
            conexion_subestacion,
            capacidad_generador,
            carga_a_solicitar,
            clasificacion_instalacion,
            nombre_pro,
            nro_hojas,
            nro_niveles,
            nro_servicio_a_instalar,
            nro_transformadores,
            nro_tablero,
            tension_suministro,
            tipo_servicio,
        } = req.body;

        const {status, content} = await Services.instalacionService.save(
            capacidad_subestacion,
            conexion_subestacion,
            capacidad_generador,
            carga_a_solicitar,
            clasificacion_instalacion,
            nombre_pro,
            nro_hojas,
            nro_niveles,
            nro_servicio_a_instalar,
            nro_transformadores,
            nro_tablero,
            tension_suministro,
            tipo_servicio);

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));

    } catch (e) {
        next(e);
    }
};

instalacionController.findAll = async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
}

instalacionController.findByNit = async (req, res, next) => {

    try {

    } catch (e) {
        next(e)
    }

}

instalacionController.update = async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
}

module.exports = instalacionController;