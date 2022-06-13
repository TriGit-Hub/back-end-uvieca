const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const instalacionService = {}

//TODO: Change error attributes as needed

instalacionService.save = async (clienteId) => {

}

instalacionService.findAll = async () => {

    const result = await db.Instalacion.findAll({include: db.Inspeccion});

    if (result.length < 1) {
        return ServiceResponse(false, null);
    }

    return ServiceResponse(true, result);
}

instalacionService.update = async (instalacion) => {

}

module.exports = instalacionService;
