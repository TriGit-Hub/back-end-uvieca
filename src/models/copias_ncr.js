const { Sequelize, DataTypes } = require('sequelize');

const copiasncr = (sequelize) => {
    sequelize.define('copiasncr', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });
}

module.exports = copiasncr;
