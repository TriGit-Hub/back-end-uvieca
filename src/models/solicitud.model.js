const { Sequelize, DataTypes } = require('sequelize');

const solicitud = (sequelize) => {
    const solicitud = sequelize.define('solicitud', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        }
        },
        {
            freezeTableName: true
        });

    return solicitud;
}

module.exports = solicitud;
