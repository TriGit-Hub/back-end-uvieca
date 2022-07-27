const ApiResponse = require("../responses/ApiResponse");
const DTO = require('../dto');
const Services = require('../services/index');
var path = require('path');

const electricistaController = {}

electricistaController.getImg = async (req, res, next) => {
    try {
        const { imagen } = req.params;

        return res.sendFile(path.join(__dirname, `/../../public/uploads/img/${imagen}`));

        return res.status(200).json(ApiResponse(status, "Datos insertados con exito"));
    } catch (e) {
        next(e);
    }
};

module.exports = electricistaController;
