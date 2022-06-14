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
            order: [['createdAt', 'DESC']],
            include: [
                {model: db.Cliente, attributes: ['nombre']},
                {model: db.Electricista, attributes: ['nombre']}
            ]
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
            order: [['createdAt', 'DESC']],
            include: [{model: db.Cliente, attributes: ['nombre']}]
        });

    if (result === null) {
        return ServiceResponse(false, null);
    }

    return ServiceResponse(true, result);

}

solicitudService.changeStatus = async (id, nuevoEstado) => {
    const solicitud = await db.Solicitud.findByPk(id);

    if (solicitud === null) {
        return ServiceResponse(false, null);
    }

    solicitud.estado = nuevoEstado;

    await solicitud.save();

    return ServiceResponse(true, null);
}

module.exports = solicitudService;
