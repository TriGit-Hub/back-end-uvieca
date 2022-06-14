const {Sequelize, DataTypes} = require('sequelize');

const solicitud = (sequelize) => {
    const solicitud = sequelize.define('solicitud', {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            estado: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
        },
        {
            freezeTableName: true
        });

    return solicitud;
}

module.exports = solicitud;
