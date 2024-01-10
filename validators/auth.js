const {check} = require("express-validator")

const signupValidator = [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({min : 6}).withMessage("Password should be 6 char long")
    .notEmpty().withMessage("Password is required")
]

module.exports = {signupValidator}