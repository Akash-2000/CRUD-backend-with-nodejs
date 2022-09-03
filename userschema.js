const mongose = require("mongoose")

var userschema = new mongose.Schema({
    Name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    Age:{
        type:Number,
        required:true,
        
    },
    country:{
        type:String,
        required:true
    },
    CreatedAt:{
        type:Date,
        default:Date.now

    }
})
module.exports = mongose.model("CRUD_Info",userschema);