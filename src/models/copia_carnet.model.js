const {Sequelize, DataTypes} = require('sequelize');

const copia_carnet = (sequelize) => {
    const copia_carnet = sequelize.define('copia_carnet', {
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

    return copia_carnet;
}

module.exports = copia_carnet;
