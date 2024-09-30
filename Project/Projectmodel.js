const mongoose=require("mongoose")
const Projectschema=new mongoose.Schema({
    ProjectName:{type:String},
    // Member:{type:String},
    Member: { type: mongoose.Schema.Types.ObjectId, ref: 'Employeesignup', required: true },
    Technology:{type:String},
    Deadline:{type:String},
    percentage: {
        type: String, default: 0
    },
   Description:{type:String}

})
module.exports=new mongoose.model("Project", Projectschema)