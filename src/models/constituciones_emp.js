const { Sequelize, DataTypes } = require('sequelize');

const copias_constituciones_emp = (sequelize) => {
    const constituciones_emp = sequelize.define('copia_constituciones_emp', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });

    return constituciones_emp;
}

module.exports = copias_constituciones_emp;
