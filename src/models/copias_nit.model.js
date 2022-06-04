const { Sequelize, DataTypes } = require('sequelize');

const copiasnit = (sequelize) => {
    const copias_nit = sequelize.define('copiasnit', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return copias_nit;
}

module.exports = copiasnit;
