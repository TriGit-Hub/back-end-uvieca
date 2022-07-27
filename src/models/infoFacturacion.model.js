const {Sequelize, DataTypes} = require('sequelize');

const info_facturacion = (sequelize) => {

    const infoFacturacion = sequelize.define('info_facturacion', {

            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            razon_social: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nrc: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nit: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            act_economica: {
                type: DataTypes.STRING,
                allowNull: false,
            }

        },
        {
            freezeTableName: true
        });

    return infoFacturacion;
}

module.exports = info_facturacion;
