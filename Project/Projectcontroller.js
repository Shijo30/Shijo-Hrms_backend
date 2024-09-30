const Projectdetail=require("../Project/Projectmodel")


//add project
const projectdet=((req,res)=>{
    let Projectone=new Projectdetail({
        ProjectName:req.body.ProjectName,
        Member:req.body.Member,
        Technology:req.body.Technology,
        Deadline:req.body.Deadline,
        Description:req.body.Description
    })

Projectone.save()
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



//View project

const viewproject=((req,res)=>{
    Projectdetail.find().populate('Member')
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


////View project 
//view
const viewpro=((req,res)=>{
    Projectdetail.find({Member:req.params.id}).populate('Member')
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









const viewprojbyid=((req,res)=>{
    // console.log("id",req.params.id);
    
    Projectdetail.findById({_id:req.params.id})
    .then((result)=>{
        res.json({
            sataus:200,
            msg:"data obtained successfully",
            result:result
        })
})
.catch((err)=>{
    console.log(err);
    res.json({
        status:500,
        msg:"no data",
        err:err
    })
})
})



//delte button

const removeproj=(req,res)=>{
    Projectdetail.findByIdAndDelete({_id:req.params.id})
    .then((result)=>{
        res.json({
            msg:result,
            data:result
        })
})
.catch((err)=>{
    console.log(err);
})
}



    // Update project by id
const updateProject = (req, res) => {
    Projectdetail.findByIdAndUpdate(
        { _id: req.params.id },
        {
            ProjectName: req.body.ProjectName,
            Member: req.body.Member,
            Technology: req.body.Technology,
            Deadline: req.body.Deadline,
            Description:req.body.Description
        },
        { new: true }
    )
    .then((result) => {
        res.status(200).json({
            status: "200",
            msg: "Project updated successfully",
            data: result
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            status: "500",
            msg: "Internal Server Error",
            error: err.message
        });
    });
};


//update project status
// const updateprojectStatus=(req,res)=>{
//     console.log("in here");
//     Projectdetail.findByIdAndUpdate({_id:req.params.id},{percentage:req.body.percentage}).exec()
//     .then(data=>{
//       console.log(data);
//       res.json({
//           status:200,
//           msg:"Data updated successfully"
//       })
    
//   }).catch(err=>{
//     console.log(err);
//       res.json({
//           status:500,
//           msg:"No Data obtained",
//           Error:err
//       })
//   })
  
//   }


const updateprojectStatus = (req, res) => {
    console.log("in here");
    Projectdetail.findByIdAndUpdate(
        { _id: req.params.id },
        { percentage: req.body.percentage },
        { new: true }
    ).exec()
    .then(data => {
        console.log(data);
        res.status(200).json({
            status: 200,
            msg: "Data updated successfully",
            data: data
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            status: 500,
            msg: "No Data obtained",
            error: err.message
        });
    });
};


module.exports={projectdet,viewproject,removeproj,viewprojbyid,updateProject,viewpro,updateprojectStatus}