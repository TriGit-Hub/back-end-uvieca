const { Sequelize, DataTypes } = require('sequelize');

const electricista = (sequelize) => {
    const electricista = sequelize.define('electricista', {
            carnet: {
                type: DataTypes.STRING,
            },
            dui: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            nit: {
                type: DataTypes.STRING,
            },
            nombre: {
                type: DataTypes.STRING,
            },
            registro: {
                type: DataTypes.STRING,
            },
            telefono: {
                type: DataTypes.STRING,
            },
        },
        {
            freezeTableName: true
        });

    return electricista;
}

module.exports = electricista;
