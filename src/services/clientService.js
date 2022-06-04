const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const clientService = {}

//TODO: Change error attributes as needed
clientService.save = async (act_economica, email, id_instalacion, nit, nombre, nrc, razon_social, telefono, copiaConstitucionesEmp,
                            copiaNcrId, copiaNitId) => {


    const newClient = await db.Cliente.create({
        act_economica,
        email,
        id_instalacion,
        nit,
        nombre,
        nrc,
        razon_social,
        telefono,
        copiaConstitucionesEmp,
        copiaNcrId,
        copiaNitId,
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
