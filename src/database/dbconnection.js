const { Sequelize } = require('sequelize');
const {toBoolean} = require("validator");

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME;

const uri = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`

const sequelize = new Sequelize(uri);

sequelize.authenticate(uri)
    .then(()=> {
        console.log('Successfull')
    })

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Clientes = require('../models/client.model')(sequelize);
db.Contituciones_emp = require('../models/constituciones_emp')(sequelize);
db.Copias_nct = require('../models/copias_ncr')(sequelize);
db.Copiasn_nit = require('../models/copias_nit.model')(sequelize);

db.sync = async () => {

    let alter = process.env.DEV ? true : false;

    if(alter){
        await  sequelize.sync({alter: true});
    }

    console.log('Tables Sync!')

}

module.exports = db;
