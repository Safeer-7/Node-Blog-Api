const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true, trim : true},
    password : {type : String, required : true, minlenght: 6},
    // role : 1 -> Super admin, role : 2 -> normal admin , role : 3 -> Normal user
    role : {type : Number,default : 3}
}, { timestamp : true})

const User = mongoose.model("user", userSchema)

module.exports = User