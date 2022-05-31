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

module.exports = {
    connect,
    disconnect
}
