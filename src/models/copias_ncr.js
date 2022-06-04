const { Sequelize, DataTypes } = require('sequelize');

const copiasncr = (sequelize) => {
    const copiasncr = sequelize.define('copiasncr', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return copiasncr;
}

module.exports = copiasncr;
