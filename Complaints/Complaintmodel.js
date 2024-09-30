const mongoose=require("mongoose")
const Complaintschema=new mongoose.Schema({

    empid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Employeesignup'
    },
    date:{
        type:Date,
        required:true
},complaint:{
    type:String,
   required:true
},
status:{
    type:String,
   default:"pending"
}

})
module.exports=new mongoose.model("Complaint", Complaintschema)