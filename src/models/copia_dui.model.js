const { Sequelize, DataTypes } = require('sequelize');

const copia_duiModel = (sequelize) => {
    const copia_dui = sequelize.define('copia_dui', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return copia_dui;
}

module.exports = copia_duiModel;
