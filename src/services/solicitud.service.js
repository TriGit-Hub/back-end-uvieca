const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const instalacionService = {}

//TODO: Change error attributes as needed

instalacionService.save = async (clienteId) => {
    const newSolicitud = await db.Solicitud.create({
        clienteId
    });

    return ServiceResponse(true, null);
}


instalacionService.findAll = async () => {

}

instalacionService.findByCliente = async () => {

}

instalacionService.agregarInstalacion = async () => {

}

instalacionService.changeStatus = async (id) => {

}

module.exports = instalacionService;
