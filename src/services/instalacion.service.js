const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const instalacionService = {}

//TODO: Change error attributes as needed


instalacionService.save = async (capacidad_subestacion, conexion_subestacion, capacidad_generador, carga_a_solicitar, clasificacion_instalacion,
                                 nombre_pro, nro_hojas, nro_niveles, nro_servicio_a_instalar, nro_transformadores, nro_tablero, tension_suministro, tipo_servicio) => {

    const result = await db.sequelize.transaction(async (t) => {

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
        }, {transaction: t});

    });

    return ServiceResponse(true, null);

}

instalacionService.findAll = async () => {

}

instalacionService.findByCliente = async (cliente) => {


}

instalacionService.findByColisitud = async (solicitud) => {


}

instalacionService.update = async (instalacion) => {


}

module.exports = instalacionService;
