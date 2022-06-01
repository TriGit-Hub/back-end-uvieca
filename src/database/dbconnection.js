const { Sequelize } = require('sequelize');

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME;

require('../models/client.model')
require('../models/copias_nit.model')

const uri = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`

const sequelize = new Sequelize(uri);

sequelize.authenticate(uri)
    .then(()=> {
        console.log('Successfull')
    })

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/*db.sequelize.sync({ alter: true }).then(() => {
    console.log("re-sync db.");
});*/

module.exports = db;
