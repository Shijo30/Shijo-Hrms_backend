const mongoose=require("mongoose")
const Leaveschema=new mongoose.Schema({

    empid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Employeesignup'
    },
    date:{
        type:Date,
        required:true
},
From:
    {
        type:Date,
        required:true
    },
    To:
    {
        type:Date,
        required:true
    },
    type:
    {
        type:String,
        required:true
    },
    Days:{
        type:Number
    }
   ,
   Comments:
   {
    type:String
   },
//   ,month:{
//     type:Number
//   }
status:{
    type:String,
   default:"pending"
}
})
module.exports=new mongoose.model("Leave", Leaveschema)