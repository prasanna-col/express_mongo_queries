import express from "express";
const router = express.Router()
import StudentModel from "../models/student.js"

router.get("/get_student_data", async (request, response)=>{
    try{
        const studentList = await StudentModel.find()
        response.json({status:true, message:"success", values:studentList})
    } catch(err){
        console.error("Error fetching student data:", error);
        res.status(500).json({ error: "Internal Server Error", status:false });
    }
})

export default router;