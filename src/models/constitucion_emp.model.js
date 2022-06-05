const { Sequelize, DataTypes } = require('sequelize');

const copia_constitucion_emp = (sequelize) => {
    const copia_constitucion_emp = sequelize.define('copia_constitucion_emp', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return copia_constitucion_emp;
}

module.exports = copia_constitucion_emp;
