// required modules
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 5000
const morgan = require("morgan")
const cors = require('cors');
//middleware use
app.use(morgan("dev"))
app.use(cors())
//body parser
app.use(express.json())
app.listen(port,()=>{
    console.log(`Server listen to ${port} `)
})

// router intialization
const inforouter = require("./router")
app.use("/info",inforouter)

//mongoose connection
mongoose.connect("mongodb://localhost:27017/CRUD-data",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("db connected sucessfully")
    }
})