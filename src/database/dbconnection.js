const { Sequelize } = require('sequelize');

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME;

const uri = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`

const connect = async () => {

    const sequelize = new Sequelize(uri);

    try {
        await sequelize.authenticate();
        console.log("Connection succesfull");

    } catch (error) {
        console.log("Connection failed", error);
        process.exit(1);
    }
};

/**
 * Disconnect method
 */
const disconnect = async () => {
    try {

    } catch (error) {

    }
}

/**
 * Sync tables method
 */
const syncTables = async () => {
    const sequelize = new Sequelize(uri);

    try {
        await sequelize.sync({force: true});
        console.log("Tables sync");

    } catch (error) {
        console.log("Connection failed", error);
        process.exit(1);
    }
}

module.exports = {
    connect,
    disconnect,
    syncTables
}
