const mongoose = require("mongoose")
const {connectionUrl} = require("../config/kyes")

const connectMongoDb = async() => {
    try{
        await mongoose.connect(connectionUrl)
        console.log("Database Connection Successful");
    }catch(error){
        console.log(error.message)
    }
}

module.exports = connectMongoDb