const express=require('express')
const Router=express.Router()

const  Empdetail=require("../Hrms_Backend/Employee/Employeecontroller")
const  Hrdetail=require("../Hrms_Backend/Hr/Hrcontroller")
const  Projectdetail=require("../Hrms_Backend/Project/Projectcontroller")
const  Complainttdetail=require("../Hrms_Backend/Complaints/Complaintcontroller")
const  Leaves=require("../Hrms_Backend/Leave/Leavecontroller")

//Employee
Router.post('/Employeedetail', Empdetail.upload, Empdetail.Employeedetail)
Router.get("/viewbyid/:id",  Empdetail.viewbyid)
Router.get("/approvebyid/:id",  Empdetail.approvebyid)
Router.post("/deleteemp/:id",  Empdetail.removeemp)
Router.get("/viewemp",  Empdetail.viewallemp)
Router.get("/viewapprovedemp",  Empdetail.viewapproveemp)
Router.post("/emplogin",  Empdetail.Emplogin)
Router.post("/updateemp/:id",Empdetail.upload, Empdetail.updateemp)

//HR
Router.post('/Hrdetail',Hrdetail.upload,  Hrdetail.Hrdet)
Router.post('/upload',  Hrdetail.upload)
Router.get("/hrviewbyid/:id",  Hrdetail.viewbyid)
Router.get("/viewhr",  Hrdetail.viewhr)
Router.post("/hrlogin",  Hrdetail.HRlogin)
Router.post("/updatehr/:id",Hrdetail.upload, Hrdetail.updatehr)



//Project
Router.post("/Project", Projectdetail.projectdet)
Router.get("/viewproj",  Projectdetail.viewproject)
Router.post("/deleteproj/:id",Projectdetail.removeproj)
Router.get("/viewprojbyid/:id",  Projectdetail.viewprojbyid)
// Router.post("/updateproject/:id", Projectdetail.updateproj)
Router.post("/updateProject/:id", Projectdetail.updateProject)
Router.get("/viewpro/:id",  Projectdetail.viewpro)
Router.post('/updateprojectStatus/:id',Projectdetail.updateprojectStatus)//done


//complaint
Router.post("/complaint/:id",Complainttdetail.complaints)
Router.get("/viewcomplaint/:id",  Complainttdetail.viewcomplaint)
Router.get('/viewPendingComplaints',Complainttdetail.viewPendingComplaints)
Router.get('/viewallComplaints',Complainttdetail.viewallComplaints)
Router.post('/updateComplaintStatus/:id',Complainttdetail.updateComplaintStatus)//done


//leave
Router.post("/addleave/:id",Leaves.addleave)
Router.get("/viewallleave",  Leaves.viewallleave)
Router.get("/leavereq",  Leaves.viewleavereq)
Router.get("/approveleave/:id",  Leaves.approvebyid)
Router.get("/rejectleave/:id",  Leaves.rejectbyid)
Router.get("/viewapprovedleave/:id",  Leaves.viewapproveleave)



module.exports=Router

