const { Sequelize, DataTypes } = require('sequelize');

const inspeccion = (sequelize) => {
    const inspeccion = sequelize.define('inspeccion', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return inspeccion;
}

module.exports = inspeccion;
