const { Sequelize, DataTypes} = require('sequelize');

const clientes = (sequelize) => {
    const clientes = sequelize.define('cliente', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            act_economica: {
                type: DataTypes.STRING,
                unique: true,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
            },
            id_instalacion: {
                type: DataTypes.STRING,
                unique: true,
            },
            nit: {
                type: DataTypes.STRING,
                unique: true,
            },
            constitucion_empresa: {
                type: DataTypes.BIGINT,
                unique: true,
            },
            nrc: {
                type: DataTypes.STRING,
                unique: true,
            },
            nombre: {
                type: DataTypes.STRING,
            },
            razon_social: {
                type: DataTypes.STRING,
            },
            telefono: {
                type: DataTypes.STRING,
                unique: true,
            }
        },
        {
            freezeTableName: true
        });

    return clientes;

}



module.exports = clientes;


