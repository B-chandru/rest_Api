const  Crud = require("../models/crudSchema");
const mongoose = require("mongoose");

const crudCtrl={
    getCrud : async (req,res)=>{
        try{
        const crud = await Crud.find();
        res.status(200).json(crud);
    }
    catch(err){
     res.status(404).json({ err: err.message})
    }
},
    postCrud : async (req,res)=>{
        const crud = new Crud(req.body);
        try{
            await crud.save();
            res.status(200).json(crud);
        }
        catch(err){
         res.status(404).json({ err: err.message})
        }

    },
    deleteCrud : async (req,res)=>{
        await Crud.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"deleted the msg"})
},
updateCrud : async (req,res)=>{
    const {title, content} = req.body;
    const crudupdate =  await  Crud.findOneAndUpdate({_id:  req.params.id},{
        title,
        content
    });
     
   res.status(200).json({msg:"updated the msg" })
},
getbyidCrud : async (req,res)=>{
    const crudbyid = await Crud.findById(req.params.id)
    res.status(400).json(crudbyid)
}

}


module.exports = crudCtrl
