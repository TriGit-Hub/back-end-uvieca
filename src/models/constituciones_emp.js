const { Sequelize, DataTypes } = require('sequelize');

const constituciones_emp = (sequelize) => {
    sequelize.define('constituciones_emp', {
            img: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName: true
        });
}

module.exports = constituciones_emp;
