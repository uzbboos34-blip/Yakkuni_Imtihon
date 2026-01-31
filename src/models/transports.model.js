import mongoose from "mongoose";

const transportSchema = new mongoose.Schema({
    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branches",
        required:true
    },
    model:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    }
},{
    timestamps: true
})

export default mongoose.model("transports", transportSchema)