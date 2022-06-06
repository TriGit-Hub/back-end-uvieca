const {Sequelize, DataTypes} = require('sequelize');

const copia_dui = (sequelize) => {
    const copia_dui = sequelize.define('copia_dui', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            img: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            freezeTableName: true
        });

    return copia_dui;
}

module.exports = copia_dui;
