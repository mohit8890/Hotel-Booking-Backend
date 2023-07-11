import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConfirmbSchema= new mongoose.Schema({
    bid:{
        type:String,
        
    },
    sdate:{
        type:Date,
        
    },
    edate:{
        type:Date,
    },
    un:{
        type:String,
    },
    ue:{
        type:String,
    },
    rn:{
        type:String,
    },
    hn:{
        type:String,
    }
    
});

export default mongoose.model("confirmb",ConfirmbSchema)