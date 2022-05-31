const ServiceResponse = require("../responses/ServiceResponse");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const Errors = require('../errors');

const service = {};

//TODO: Change user attributes
service.save = async (username, email, password, role) => {
   try{

        return ServiceResponse(true, "newUser");
    } catch (e) {
    } finally {
    }
}

service.findByUsername = async (username) => {



    return ServiceResponse(true, "user");

}

service.findByEmail = async (email) => {



    return ServiceResponse(true, "user");

}

service.isEmailAvailable = async (email) => {

    return true;

}

service.isUsernameAvailable = async (username) => {

    return true;

}

module.exports = service;
