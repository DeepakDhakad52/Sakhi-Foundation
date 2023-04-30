const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    state:{
        type:String,
    },
    village:{
        type:String,
    },
    gender:{
        type:String,
    },
    subject:{
        type:String
    }
    
})

module.exports = mongoose.model("infoModel", infoSchema);