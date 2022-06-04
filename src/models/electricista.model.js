const { Sequelize, DataTypes } = require('sequelize');

const electricista = (sequelize) => {
    const electricista = sequelize.define('electricista', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return electricista;
}

module.exports = electricista;
