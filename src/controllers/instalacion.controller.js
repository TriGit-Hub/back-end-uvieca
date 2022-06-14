const ApiResponse = require("../responses/ApiResponse");
const Services = require('../services/index')

const instalacionController = {}

instalacionController.save = async (req, res, next) => {
    try {

        const {
            solicitudId,
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
            solicitudId,
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

        const {status, content} = await Services.instalacionService.findAll();

        if (!status) {
            return res.status(200).json(ApiResponse(status, "No se obtuvieron resultados", content));
        }

        return res.status(200).json(ApiResponse(status, "Resultado exitoso", content));
    } catch (e) {
        next(e);
    }
}

instalacionController.update = async (req, res, next) => {
    try {
        const {status, content} = await Services.instalacionService.update(req.body);

        return res.status(200).json(ApiResponse(status, "Actualizado con exito", content));
    } catch (e) {
        next(e);
    }
}

module.exports = instalacionController;
