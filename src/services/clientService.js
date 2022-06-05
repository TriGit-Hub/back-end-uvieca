const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const clientService = {}

//TODO: Change error attributes as needed
clientService.save = async (act_economica, email, id_instalacion, nit, constitucion_empresa,nrc, nombre,razon_social, telefono) => {


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
        copiaConstitucionEmpId: 1,
        copiaNcrId: 1,
        copiaNitId: 1,
        createdAt: Date(),
        updatedAt: Date(),
    });

    return ServiceResponse(true, newClient);

}

clientService.findAll = async () => {


    const result = await db.Cliente.findAll();

    return ServiceResponse(true, result);

}

module.exports = clientService;
