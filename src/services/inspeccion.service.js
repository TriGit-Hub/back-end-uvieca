const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const inspeccionService = {}

//TODO: Change error attributes as needed

inspeccionService.save = async (detalles, instalacionId) => {

    const newInspeccion = await db.Inspeccion.create({
        detalles,
        instalacionId,
    });

    return ServiceResponse(true, null);

}

inspeccionService.update = async (inspeccion) => {

    const result = await db.Inspeccion.findByPk(inspeccion.id);

    console.log(result);

    if (result === null) {
        return ServiceResponse(false, result);
    }

    const keysInspeccion = Object.keys(inspeccion);

    for (let i = 0; i < keysInspeccion.length; i++) {
        result[`${keysInspeccion[i]}`] = inspeccion[`${keysInspeccion[i]}`];
    }

    const newInfo = await result.save();

    return ServiceResponse(true, newInfo);
}

module.exports = inspeccionService;
