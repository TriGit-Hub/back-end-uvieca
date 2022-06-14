const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const solicitudService = {}

//TODO: Change error attributes as needed

solicitudService.save = async (clienteId) => {
    const newSolicitud = await db.Solicitud.create({
        clienteId
    });

    return ServiceResponse(true, null);
}


solicitudService.findAll = async () => {

}

solicitudService.findByCliente = async () => {

}

solicitudService.agregarInstalacion = async (instalacionId, solicitudId, t) => {

}

solicitudService.changeStatus = async (id) => {

}

module.exports = solicitudService;
