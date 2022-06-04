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
            },
            email: {
                type: DataTypes.STRING
            },
            id_instalacion: {
                type: DataTypes.STRING
            },
            nit: {
                type: DataTypes.STRING,
            },
            constitucion_empresa: {
                type: DataTypes.BIGINT,
            },
            nrc: {
                type: DataTypes.STRING,
            },
            nombre: {
                type: DataTypes.STRING,
            },
            razon_social: {
                type: DataTypes.STRING,
            },
            telefono: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return clientes;

}



module.exports = clientes;


