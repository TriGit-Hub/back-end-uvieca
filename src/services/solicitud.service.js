const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const solicitudService = {}

//TODO: Change error attributes as needed

solicitudService.save = async (clienteId, facturacion) => {

    const result = await db.sequelize.transaction(async (t) => {

        /*const cliente = await db.Cliente.findByPk(clienteId);

        if (!cliente) {
            return ServiceResponse(false, "No existe el cliente");
        }*/

        const newNrcCopy = await db.Copia_ncr.create({
            img: 'prueba imagen nrc solicitud'
        }, {transaction: t});

        const newFacturacion = await db.Info_facturacion.create({
            ...facturacion,
            copiaNcrId: newNrcCopy.dataValues.id
        }, {transaction: t});

        const newSolicitud = await db.Solicitud.create({
            clienteId,
            infoFacturacionId: newFacturacion.dataValues.id
        }, {transaction: t});

    });

    return ServiceResponse(true, null);
}


solicitudService.findAll = async () => {
    const result = await db.Solicitud.findAll(
        {
            order: [['createdAt', 'DESC']],
            include: [
                {model: db.Cliente, attributes: ['nombre']},
                {model: db.Electricista, attributes: ['nombre']},
                {model: db.Info_facturacion}
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

solicitudService.changeStatus = async (id, nuevoEstado) => {
    const solicitud = await db.Solicitud.findByPk(id);

    if (solicitud === null) {
        return ServiceResponse(false, null);
    }

    solicitud.estado = nuevoEstado;

    await solicitud.save();

    return ServiceResponse(true, null);
}

solicitudService.addElectricist = async (id, electricistaId) => {
    const electricista = await db.Electricista.findByPk(electricistaId);

    if (electricista === null) {
        return ServiceResponse(false, "No existe el electricista");
    }

    const solicitud = await db.Solicitud.findByPk(id);

    if (solicitud === null) {
        return ServiceResponse(false, "No existe la solicitud");
    }

    await solicitud.addElectricista(electricista);

    return ServiceResponse(true, null);

}

module.exports = solicitudService;
