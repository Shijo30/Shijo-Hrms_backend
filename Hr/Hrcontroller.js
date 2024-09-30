const Hrdetail=require("../Hr/Hrmodel")
const multer=require("multer")
const storage=multer.diskStorage({
    destination:function(req,res,cb){

        cb(null,'./Uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage}).single('image');

//add
const Hrdet=((req,res)=>{
console.log("file",req.file);

    let Hrone=new Hrdetail ({
        Name:req.body.Name,
        Email:req.body.Email,
        Gender:req.body.Gender,
        Mobileno:req.body.Mobileno,
        Age:req.body.Age,
        Designation:req.body.Designation,
        Dateofjoin:req.body.Dateofjoin,
        Password:req.body.Password,
        City:req.body.City,
        District:req.body.District,
        Pincode:req.body.Pincode,
        image:req.file
    })

Hrone.save()
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



//findbyid
const viewbyid=((req,res)=>{
    Hrdetail.findById({_id:req.params.id})
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



//view 
const viewhr=((req,res)=>{
    Hrdetail.find({})
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



//login 

const HRlogin=(req,res)=>{
    const{Email,Password}=req.body;

    Hrdetail.findOne({Email:Email})
    .then((data)=>{
        if(!data){
            return res.json({
                status:400,
                msg:"User not found"
            });
        }

        // if(!data.isActive){
        //     return res.json({
        //         status:403,
        //         msg:"User not yet approved"
        //     });
        // }

        if (Password===data.Password){
            return res.json({
                status:200,
                msg:"Login Success",
                data:{
                    _id: data._id ,//including the _id in the response 
                    
                }
            });
        }
        else {
            return res.json({
                status:500,
                msg:"Incorrect Password",
                
            });
        }
    })

    .catch((err)=>{
        console.log(err);
        return res.json({
            status:400,
            msg:"user not found "
        });
    });
};

// Update hr by id
const updatehr = (req, res) => {
    Hrdetail.findByIdAndUpdate(
        { _id: req.params.id },
        {
            Name:req.body.Name,
            Email:req.body.Email,
            Gender:req.body.Gender,
            Mobileno:req.body.Mobileno,
            Age:req.body.Age,
            Designation:req.body.Designation,
            Dateofjoin:req.body.Dateofjoin,
            Password:req.body.Password,
            City:req.body.City,
            District:req.body.District,
            Pincode:req.body.Pincode,
            image:req.file
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



module.exports={Hrdet,viewbyid,HRlogin,upload,viewhr,updatehr}