const { Sequelize } = require('sequelize');

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

//models instances

db.Clientes = require('../models/client.model')(sequelize);
db.Contituciones_emp = require('../models/constituciones_emp')(sequelize);
db.Copias_ncr = require('../models/copias_ncr')(sequelize);
db.Copias_nit = require('../models/copias_nit.model')(sequelize);
db.Inspeccion = require('../models/inspeccion.model')(sequelize);
db.Instalacion = require('../models/instalacion.model')(sequelize);

//asociations

db.Contituciones_emp.hasOne(db.Clientes);
db.Copias_ncr.hasOne(db.Clientes);
db.Copias_nit.hasOne(db.Clientes);

db.Instalacion.hasMany(db.Inspeccion);

db.sync = async () => {

    let alter = process.env.DEV ? true : false;

    if(alter){
        await  sequelize.sync({alter: true});
    }

    console.log('Tables Sync!')

}

module.exports = db;
