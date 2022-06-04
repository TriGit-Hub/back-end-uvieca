const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const clientService = {}

//TODO: Change error attributes as needed
clientService.save = async () => {

}

clientService.findAll = async () => {

    try{
        const result = await db.Cliente.findAll();

        return ServiceResponse(true, result);
    }catch (e){

    }
}

module.exports = clientService;
