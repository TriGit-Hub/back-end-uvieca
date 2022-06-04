const { Sequelize, DataTypes} = require('sequelize');

const clientes = (sequelize) => {
    const clientes = sequelize.define('cliente', {
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
            nombre: {
                type: DataTypes.STRING,
            },
            ncr: {
                type: DataTypes.STRING,
            },
            razon_social: {
                type: DataTypes.STRING,
            },
            telefono: {
                type: DataTypes.STRING,
            },
            constitucion_empresa: {
                type: DataTypes.BIGINT,
            },
            copia_nit_id: {
                type: DataTypes.BIGINT,
            },
            copia_ncr_id: {
                type: DataTypes.BIGINT,
            }
        },
        {
            freezeTableName: true
        });

    return clientes;

}



module.exports = clientes;


