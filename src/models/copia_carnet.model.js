const { Sequelize, DataTypes } = require('sequelize');

const copia_carnet = (sequelize) => {
    const copia_carnet = sequelize.define('copia_carnet', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return copia_carnet;
}

module.exports = copia_carnet;
