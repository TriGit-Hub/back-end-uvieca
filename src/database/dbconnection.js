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

db.Cliente = require('../models/client.model')(sequelize);
db.Contitucion_emp = require('../models/constitucion_emp.model')(sequelize);
db.Copia_carnet = require('../models/copia_carnet.model')(sequelize);
db.Copia_dui = require('../models/copia_dui.model')(sequelize)
db.Copia_ncr = require('../models/copia_ncr.model')(sequelize);
db.Copia_nit = require('../models/copias_nit.model')(sequelize);
db.Electricista = require('../models/electricista.model')(sequelize);
db.Inspeccion = require('../models/inspeccion.model')(sequelize);
db.Instalacion = require('../models/instalacion.model')(sequelize);
db.Solicitud = require('../models/solicitud.model')(sequelize);

//asociations

db.Contitucion_emp.hasOne(db.Cliente);
db.Copia_ncr.hasOne(db.Cliente);
db.Copia_nit.hasOne(db.Cliente);

db.Cliente.belongsTo(db.Contitucion_emp);
db.Cliente.belongsTo(db.Copia_ncr);
db.Cliente.belongsTo(db.Copia_nit);

db.Instalacion.hasMany(db.Inspeccion);

db.Copia_dui.hasOne(db.Electricista);
db.Copia_carnet.hasOne(db.Electricista);

db.Electricista.belongsTo(db.Copia_dui);
db.Electricista.belongsTo(db.Copia_carnet);

db.Cliente.hasOne(db.Solicitud);
db.Instalacion.hasOne(db.Solicitud);

db.Solicitud.belongsTo(db.Cliente);
db.Solicitud.belongsTo(db.Instalacion);

db.Solicitud.belongsToMany(db.Electricista, {through: 'solicitudxelectricista'});

db.sync = async () => {

    let alter = process.env.DEV ? true : false;

    if(alter){
        await  sequelize.sync({alter: true});

        console.log('Tables Sync!')
    }

}

module.exports = db;
