const userService = require("../services/index").userService;
const ApiResponse = require("../responses/ApiResponse");
const Errors = require('../errors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DTO = require('../dto');

const authController = {}

authController.register = async (req, res, next) => {
    try {

        return res.status(200).json(ApiResponse(true, "Successful register"));
    } catch (e) {
        next(e);
    }
}

authController.login = async (req, res, next) => {
    try {


        return res.status(200).json(ApiResponse(true, "Successful login", DTO.loginDTO(token, user.content.toPublicDTO())));
    } catch (e) {
        next(e);
    }
}

module.exports = authController;
