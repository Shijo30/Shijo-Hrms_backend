const Complainttdetail=require("../Complaints/Complaintmodel")

// add complaint
const complaints=((req,res)=>{  
    let date=new Date()
   const complaintsone=new Complainttdetail({
        empid:req.params.id,
        complaint:req.body.complaint,
        date:date
    })

complaintsone.save()
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


//view
const viewcomplaint=((req,res)=>{
    Complainttdetail.find({empid:req.params.id}).populate('empid')
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





const viewallComplaints=(req,res)=>{
    Complainttdetail.find({},).populate('empid')
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

// view pending complaints

const viewPendingComplaints=(req,res)=>{
    Complainttdetail.find({status:"pending"},).populate('empid')
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


  //update complaint status
  const updateComplaintStatus=(req,res)=>{
    console.log("in here");
    Complainttdetail.findByIdAndUpdate({_id:req.params.id},{status:req.body.status}).exec()
    .then(data=>{
      console.log(data);
      res.json({
          status:200,
          msg:"Data updated successfully"
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



module.exports={complaints,viewcomplaint,viewPendingComplaints,updateComplaintStatus,viewallComplaints}