import mongoose from "mongoose";

const brancheSchema = new mongoose.Schema({
    name:{
        type:String,
        max:3,
        min:50,
        required:true
    },
    address:{
        type:String,
        required:true
    }
},{
    timeseries:true
})

export default mongoose.model("branches", brancheSchema)