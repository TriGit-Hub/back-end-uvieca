const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const clientService = {}

//TODO: Change error attributes as needed
clientService.save = async (act_economica, email, id_instalacion, nit, constitucion_empresa, nrc, nombre, razon_social, telefono) => {

    const result = await db.sequelize.transaction(async (t) => {

        const newNitCopy = await db.Copia_nit.create({
            img: 'prueba imagen nit'
        }, {transaction: t});

        const newconstitucionEmpCopy = await db.Contitucion_emp.create({
            img: 'prueba imagen constitucionEmp'
        }, {transaction: t});

        const newNrcCopy = await db.Copia_ncr.create({
            img: 'prueba imagen nrc'
        }, {transaction: t});

        const newClient = await db.Cliente.create({
            act_economica,
            email,
            id_instalacion,
            nit,
            constitucion_empresa,
            nrc,
            nombre,
            razon_social,
            telefono,
            copiaConstitucionEmpId: newconstitucionEmpCopy.dataValues.id,
            copiaNcrId: newNrcCopy.dataValues.id,
            copiaNitId: newNitCopy.dataValues.id,
            createdAt: Date(),
            updatedAt: Date(),
        }, {transaction: t});


    });

    return ServiceResponse(true, null);

}

clientService.findAll = async () => {

    const result = await db.Cliente.findAll({include: [db.Copia_nit, db.Copia_ncr, db.Contitucion_emp]});

    return ServiceResponse(true, result);

}

clientService.update = async (cliente) => {

    const result = await db.Cliente.findByPk(cliente.id);

    if (result === null) {
        return ServiceResponse(false, result);
    }

    const keysCliente = Object.keys(cliente);

    for (let i = 0; i < keysCliente.length; i++) {
        result[`${keysCliente[i]}`] = cliente[`${keysCliente[i]}`];
    }

    const newInfo = await result.save();

    return ServiceResponse(true, newInfo);

}

module.exports = clientService;
