const {Sequelize, DataTypes} = require('sequelize');

const electricista = (sequelize) => {
    const electricista = sequelize.define('electricista', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
            carnet: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            dui: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            nit: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            registro: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            telefono: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
        },
        {
            freezeTableName: true
        });

    return electricista;
}

module.exports = electricista;
