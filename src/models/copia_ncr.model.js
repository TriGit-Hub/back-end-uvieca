const { Sequelize, DataTypes } = require('sequelize');

const copia_ncr = (sequelize) => {
    const copia_ncr = sequelize.define('copia_ncr', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return copia_ncr;
}

module.exports = copia_ncr;
