const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const clienteService = {}

//TODO: Change error attributes as needed
clienteService.save = async (act_economica, email, nit, constitucion_empresa, nrc, nombre, razon_social, telefono) => {

    const result = await db.sequelize.transaction(async (t) => {

        const newNitCopy = await db.Copia_nit.create({
            img: 'prueba imagen nit cliente'
        }, {transaction: t});

        const newconstitucionEmpCopy = await db.Contitucion_emp.create({
            img: 'prueba imagen constitucionEmp cliente'
        }, {transaction: t});

        const newNrcCopy = await db.Copia_ncr.create({
            img: 'prueba imagen nrc cliente'
        }, {transaction: t});

        const newClient = await db.Cliente.create({
            act_economica,
            email,
            nit,
            constitucion_empresa,
            nrc,
            nombre,
            razon_social,
            telefono,
            copiaConstitucionEmpId: newconstitucionEmpCopy.dataValues.id,
            copiaNcrId: newNrcCopy.dataValues.id,
            copiaNitId: newNitCopy.dataValues.id,
        }, {transaction: t});


    });

    return ServiceResponse(true, null);

}

clienteService.findAll = async () => {

    const result = await db.Cliente.findAll({include: [db.Copia_nit, db.Copia_ncr, db.Contitucion_emp]});

    if (result.length < 1) {
        return ServiceResponse(false, []);
    }

    return ServiceResponse(true, result);

}

clienteService.findByNit = async (nit) => {
    const result = await db.Cliente.findOne({where: {nit}});

    if (result === null) {
        return ServiceResponse(false, null);
    }

    return ServiceResponse(true, result);
}

clienteService.update = async (cliente) => {

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

module.exports = clienteService;
