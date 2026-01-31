import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branches",
        required:true
    },
    username:{
        type:String,
        min:3,
        max:20,
        required:true
    },
    password:{
        type:String,
        min:6,
        max:30,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    birth_date:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    role: {
        type: String,
        enum: ['Admin', 'SuperAdmin'],
        default: 'Admin'
    }

},{
    timestamps:true
})

export default mongoose.model("Admin", AdminSchema)