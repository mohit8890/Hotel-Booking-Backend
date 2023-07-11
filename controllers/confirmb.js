import confirmb from "../models/confirmb.js";



export const createconfirmb = async(req,res,next)=>{
    const newConfirmb=new confirmb(req.body)
    try{
        const savedConfirmb=await newConfirmb.save()
        res.status(200).json(savedConfirmb);
    }catch(err){
        next("err")
    }

}


export const getconfirmb = async(req,res,next)=>{
    try{
        const a=await confirmb.find()
        res.status(200).json(a);
    }catch(err){
        next(err)
    }

}