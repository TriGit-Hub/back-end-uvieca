const { Sequelize, DataTypes } = require('sequelize');

const copiasnit = (sequelize) => {
    sequelize.define('copiasnit', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });
}

module.exports = copiasnit;
