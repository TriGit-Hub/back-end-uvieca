const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const instalacionService = {}

//TODO: Change error attributes as needed

instalacionService.save = async (capacidad_subestacion, conexion_subestacion, capacidad_generador, carga_a_solicitar, clasificacion_instalacion,
                                 nombre_pro, nro_hojas, nro_niveles, nro_servicio_a_instalar, nro_transformadores, nro_tablero, tension_suministro, tipo_servicio) => {

    const newInstalacion = await db.Instalacion.create({
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
    });

    return ServiceResponse(true, null);

}

instalacionService.findAll = async () => {

    const result = await db.Instalacion.findAll({include: db.Inspeccion}); //TODO: Poner los include luego de hacer inspeccion.

    if (result.length < 1) {
        return ServiceResponse(false, null);
    }

    return ServiceResponse(true, result);
}

instalacionService.findBySolisitud = async (solicitud) => {


}

instalacionService.update = async (instalacion) => {

    const result = await db.Instalacion.findByPk(instalacion.id);

    if (result === null) {
        return ServiceResponse(false, result);
    }

    const keysInstalacion = Object.keys(instalacion);

    for (let i = 0; i < keysInstalacion.length; i++) {
        result[`${keysInstalacion[i]}`] = instalacion[`${keysInstalacion[i]}`];
    }

    const newInfo = await result.save();

    return ServiceResponse(true, newInfo);

}

module.exports = instalacionService;
