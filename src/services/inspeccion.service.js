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

inspeccionService.findAll = async () => {


}

inspeccionService.update = async (inspeccion) => {


}

module.exports = inspeccionService;
