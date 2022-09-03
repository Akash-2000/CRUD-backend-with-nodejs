const express = require('express');
const router = express.Router()
const userschema = require("./userschema")

//create
router.post("/",async(req,res)=>{
    console.log(req.body)
    var data = new userschema({
        Name:req.body.Name,
        Age:req.body.Age,
        country:req.body.country
    })
    await data.save()
    res.json(data)
})

//getAll
router.get("/",async(req,res)=>{
    var allData =await userschema.find();
    res.json(allData)
})
//Put
router.put("/update",async(req,res)=>{
    var update = await userschema.update({_id:req.body._id},{$set:{
        Name:req.body.Name,
        Age:req.body.Age,
        country:req.body.country
    }})
    res.json(update)
})
//Delete
router.delete("/delete/:id",async(req,res)=>{
    console.log(req.params)
    var delData = await userschema.findByIdAndRemove({_id:req.params.id}).then(e=>{
        res.json("sucessfully deleted")
    })
})

router.get("/",(req,res)=>{
    res.json("hi i am from get router")
})

module.exports = router