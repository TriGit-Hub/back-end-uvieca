const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DBURI);

const copiasncr = sequelize.define('copiasncr', {
        img: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true
    });

module.exports = copiasncr;

(async () => {
    await copiasncr.sync({ alter: true });
})();
