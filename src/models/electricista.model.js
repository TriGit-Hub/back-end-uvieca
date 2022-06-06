const {Sequelize, DataTypes} = require('sequelize');

const electricista = (sequelize) => {
    const electricista = sequelize.define('electricista', {
            carnet: {
                type: DataTypes.STRING,
                unique: true,
            },
            dui: {
                type: DataTypes.STRING,
                unique: true,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
            },
            nit: {
                type: DataTypes.STRING,
                unique: true,
            },
            nombre: {
                type: DataTypes.STRING
            },
            registro: {
                type: DataTypes.STRING,
                unique: true,
            },
            telefono: {
                type: DataTypes.STRING,
                unique: true,
            },
        },
        {
            freezeTableName: true
        });

    return electricista;
}

module.exports = electricista;
