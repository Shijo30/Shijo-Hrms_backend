const Leaves=require("../Leave/Leavemodel")

// add leave
const addleave=((req,res)=>{  
    let date=new Date()
   const newleave=new Leaves({
      
        empid:req.params.id,
        From:req.body.From,
        To:req.body.To,
        Days:req.body.Days,
        Comments:req.body.Comments,
        type:req.body.type,
        date:date
        
    })

    newleave.save()
.then((result)=>{
    console.log(result);
    res.json({
        status:200,
        msg:"saved",
        data:result
    })
 
})
.catch((err)=>{
    res.json({
        status:500,
    msg:"not saved"
    })
    
})
})


//view all

const viewallleave=(req,res)=>{
    Leaves.find({}).populate('empid')
    .then(data=>{
      console.log(data);
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
    console.log(err);
      res.json({
          status:500,
          msg:"No Data obtained",
          Error:err
      })
  })
  
  }

//view leaeve req

const viewleavereq=(req,res)=>{
    Leaves.find({status:"pending"}).populate('empid')
    .then(data=>{
      console.log(data);
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
    console.log(err);
      res.json({
          status:500,
          msg:"No Data obtained",
          Error:err
      })
  })
  
  }


  //Approve leave button
const approvebyid=((req,res)=>{
    Leaves.findByIdAndUpdate({_id:req.params.id},{status:"Approved"})
    .then((result)=>{
        res.json({
            msg:result
        })
})
.catch((err)=>{
    console.log(err);
})
})


//reject leave  button
const rejectbyid=((req,res)=>{
    Leaves.findByIdAndUpdate({_id:req.params.id},{status:"Rejected"})
    .then((result)=>{
        res.json({
            msg:result
        })
})
.catch((err)=>{
    console.log(err);
})
})



//view Approved leave
const viewapproveleave=((req,res)=>{
    Leaves.find({empid:req.params.id})
    .then((result)=>{
        res.json({
            msg:result,
            data:result
        })
})
.catch((err)=>{
    console.log(err);
    console.log("error"+err)
})
})

module.exports={addleave,viewleavereq,approvebyid,rejectbyid,viewapproveleave,viewallleave}