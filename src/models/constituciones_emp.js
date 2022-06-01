const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DBURI);

const constituciones_emp = sequelize.define('constituciones_emp', {
        img: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true
    });

module.exports = constituciones_emp;

/*(async () => {
    await constituciones_emp.sync({ alter: true });
})();*/
