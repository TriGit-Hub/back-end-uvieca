const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const electricistaService = {}

//TODO: Change error attributes as needed
electricistaService.save = async (carnet, dui, email, nit, nombre, registro, telefono) => {

    const result = await db.sequelize.transaction(async (t) => {

        const newNitCopy = await db.Copia_dui.create({
            img: 'prueba imagen dui'
        }, {transaction: t});

        const newCarnetCopy = await db.Copia_carnet.create({
            img: 'prueba imagen carnet'
        }, {transaction: t});

        const newElectricista = await db.Electricista.create({
            carnet,
            dui,
            email,
            nit,
            nombre,
            registro,
            telefono,
            copiaDuiId: newNitCopy.dataValues.id,
            copiaCarnetId: newCarnetCopy.dataValues.id,
        }, {transaction: t});

    });

    return ServiceResponse(true, null);

}

electricistaService.findAll = async () => {

}

electricistaService.update = async () => {

}

module.exports = electricistaService;
