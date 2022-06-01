const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DBURI);

const clientes = sequelize.define('clientes', {
    act_economica: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    id_instalacion: {
        type: DataTypes.STRING
    },
    nit: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    ncr: {
        type: DataTypes.STRING,
    },
    razon_social: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.STRING,
    },
    constitucion_empresa: {
        type: DataTypes.BIGINT,
    },
    copia_nit_id: {
        type: DataTypes.BIGINT,
    },
    copia_ncr_id: {
        type: DataTypes.BIGINT,
    },
    aaaa: {
        type: DataTypes.BIGINT,
    }
},
    {
        freezeTableName: true
    })

console.log(clientes === sequelize.models.clientes);
