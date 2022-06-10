const ServiceResponse = require("../responses/ServiceResponse");
const db = require('../database/dbconnection');

const instalacionService = {}

//TODO: Change error attributes as needed
instalacionService.save = async () => {

    return ServiceResponse(true, null);

}

instalacionService.findAll = async () => {

}

instalacionService.findByCliente = async (cliente) => {


}

instalacionService.findByColisitud = async (solicitud) => {


}

instalacionService.update = async (instalacion) => {



}

module.exports = instalacionService;
