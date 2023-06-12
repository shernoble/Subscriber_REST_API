require("../models/database");

const Sub=require("../models/Subscriber");

exports.getAll=async(req,res) => {
    try{
        // res.send("hello wrld");
        const subs=await Sub.find();
        res.json(subs);
    }
    catch(err){
        // 500: err on your server
        res.status(500).json({message:err.message});
    }
}
exports.getOne=async(req,res) => {
    try{
        let sub=Sub.findById(req.params.id);
        // res.send(req.params.id);
        if(sub==null) res.status(404).json({message:"cannot find sub"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.createOne=async(req,res) => {
    const newSub=new Sub({
        name:req.body.name,
        subTo:req.body.channel
    });
    try {
        
        const nsub=await newSub.save();
        // 201:successfully created an object
        res.status(201).json(nsub);
    }

    catch (error) {
        // somethign wrong wiht the user input, user gives "bad data" i.e. data is incorrect or incomplete
        res.status(400).json({message:err.message});
    }
}

exports.updateOne=async(req,res) =>{
    let sub=Sub.findById(req.params.id);
    // res.send(req.params.id);
    if(sub==null) res.status(404).json({message:"cannot find sub"});
    else{
        if(req.body.name!=null) sub.name=req.body.name;
        if(req.body.channel!=null) sub.subTo=req.body.channel
    }
    try{
        const usub=await res.sub.save();
        res.json(usub);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}


exports.deleteOne=async(req,res) =>{
    let sub=Sub.findById(req.params.id);
    // res.send(req.params.id);
    if(sub==null) res.status(404).json({message:"cannot find sub"});
        
    try{
        await res.sub.remove();
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
// middleware
