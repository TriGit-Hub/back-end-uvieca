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
        return ServiceResponse(true, newElectricista.dataValues.id);
    });

    return ServiceResponse(result.status, result.content);

}

electricistaService.findAll = async () => {
    const result = await db.Electricista.findAll({include: [db.Copia_dui, db.Copia_carnet]});

    if (result.length < 1) {
        return ServiceResponse(false, null);
    }

    return ServiceResponse(true, result);
}

electricistaService.findByDui = async (dui) => {
    const result = await db.Electricista.findOne({where: {dui}});

    if (result === null) {
        return ServiceResponse(false, null);
    }

    return ServiceResponse(true, result);

}

electricistaService.deleteByDui = async (dui) => {
    const result = await db.Electricista.delete({where: {dui}});

    if (result === null) {
        return ServiceResponse(false, null);
    }

    return ServiceResponse(true, result);

}

electricistaService.update = async (electricista) => {

    const result = await db.Electricista.findByPk(electricista.id);

    if (result === null) {
        return ServiceResponse(false, result);
    }

    const keysElectricista = Object.keys(electricista);

    for (let i = 0; i < keysElectricista.length; i++) {
        result[`${keysElectricista[i]}`] = electricista[`${keysElectricista[i]}`];
    }

    const newInfo = await result.save();

    return ServiceResponse(true, newInfo);
}

module.exports = electricistaService;
