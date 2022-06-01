const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DBURI);

const copiasnit = sequelize.define('copiasnit', {
        img: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true
    });

module.exports = copiasnit;

/*(async () => {
    await copiasnit.sync({ alter: true });
})();*/
