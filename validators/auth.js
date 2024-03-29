const {check} = require("express-validator")
const mongoose = require("mongoose")
const Validator = require("validator")
const signupValidator = [
    check("name").notEmpty().withMessage("Name is required"),

    check("email")
    .isEmail()
    .withMessage("Invalid Email")
    .notEmpty()
    .withMessage("Email is required"),

    check("password")
    .isLength({min : 6})
    .withMessage("Password should be 6 char long")
    .notEmpty()
    .withMessage("Password is required")
]

const signinValidator = [
    check("email")
    .isEmail()
    .withMessage("Invalid Email")
    .notEmpty()
    .withMessage("Email is required"), 
    
    check("password")
    .isLength({min:6})
    .withMessage("Password Should be 6 Char long")
    .notEmpty()
    .withMessage("Password is required")
]

module.exports = {signupValidator, signinValidator}