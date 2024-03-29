const {Sequelize, DataTypes} = require('sequelize');

const clientes = (sequelize) => {
    const clientes = sequelize.define('cliente', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            act_economica: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
            },
            nit: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
            },
            constitucion_empresa: {
                type: DataTypes.BIGINT,
                unique: false,
                allowNull: false,
            },
            nrc: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            razon_social: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            telefono: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
            }
        },
        {
            freezeTableName: true
        });

    return clientes;

}


module.exports = clientes;


