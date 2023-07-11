import mongoose from 'mongoose';
const { Schema } = mongoose;

const ContactSchema= new mongoose.Schema({
    email:{
        type:String,
        
    },
    ph:{
        type:String,
        
    },
    
});

export default mongoose.model("contact",ContactSchema)