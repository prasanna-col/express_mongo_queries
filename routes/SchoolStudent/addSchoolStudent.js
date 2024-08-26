import express from "express";
const router = express.Router()

// Model
import SchoolStudent from "../../models/SchoolStudent/schoolStudent.js"


router.post("/schoolstudent/add", async (req, res) => {
    const { name,email,phone, age, subjects, address, enrollment_date } = req.body;
    // Create a new school student document
    const newSchoolStudent = new SchoolStudent({
        name: name,
        email:email,
        phone:phone,
        age: age,
        subjects: subjects,
        address: address,
        enrollment_date: enrollment_date
    });

    try {
        // Save the new school student document
        const savedSchoolStudent = await newSchoolStudent.save()
        res.status(201).json({ status: true, message: "success", values: savedSchoolStudent })
    } catch (error) {
        console.log("Error adding school student:", error);
        res.status(500).json({ error, status: false });
    }

})

export default router;