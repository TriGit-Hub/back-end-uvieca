const {Sequelize, DataTypes} = require('sequelize');

const copiasnit = (sequelize) => {
    const copias_nit = sequelize.define('copia_nit', {
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

    return copias_nit;
}

module.exports = copiasnit;
