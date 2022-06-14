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
    const result = await db.Solicitud.findAll(
        {
            order: [['createdAt', 'DESC']]
        });

    if (result === null) {
        return ServiceResponse(false, null);
    }

    return ServiceResponse(true, result);
}

solicitudService.findByCliente = async (clienteId) => {

    const result = await db.Solicitud.findAll(
        {
            where: {clienteId: clienteId},
            order: [['createdAt', 'DESC']]
        });

    if (result === null) {
        return ServiceResponse(false, null);
    }

    return ServiceResponse(true, result);

}

solicitudService.changeStatus = async (id) => {

}

module.exports = solicitudService;
