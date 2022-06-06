const {Sequelize, DataTypes} = require('sequelize');

const copia_constitucion_emp = (sequelize) => {
    const copia_constitucion_emp = sequelize.define('copia_constitucion_emp', {
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

    return copia_constitucion_emp;
}

module.exports = copia_constitucion_emp;
