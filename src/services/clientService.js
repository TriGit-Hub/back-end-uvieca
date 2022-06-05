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

    console.log('result', result)

}

clientService.findAll = async () => {


    const result = await db.Cliente.findAll();

    return ServiceResponse(true, result);

}

module.exports = clientService;
