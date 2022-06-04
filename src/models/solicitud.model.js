const { Sequelize, DataTypes } = require('sequelize');

const solicitud = (sequelize) => {
    const solicitud = sequelize.define('solicitud', {

        },
        {
            freezeTableName: true
        });

    return solicitud;
}

module.exports = solicitud;
