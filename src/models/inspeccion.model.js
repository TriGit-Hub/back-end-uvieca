const {Sequelize, DataTypes} = require('sequelize');

const inspeccion = (sequelize) => {
    const inspeccion = sequelize.define('inspeccion', {
            detalles: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return inspeccion;
}

module.exports = inspeccion;
