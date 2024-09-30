const mongoose=require("mongoose")
const Hrschema=new mongoose.Schema({

    Name:{type:String},
    Email:{type:String},
    Gender:{type:String},
    Mobileno:{type:Number},
    Age:{type:Number},
    Designation:{type:String},
    Dateofjoin:{type:String},
    Password:{type:String},
    City:{type:String},
    District:{type:String},
    Pincode:{type:Number},
    image:{type:Object}
    // isActive:{
    //     type:Boolean,
    //     default:false
    // },

})
module.exports=new mongoose.model("HR", Hrschema)