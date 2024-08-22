import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
// import cors from "cors";
// import userRoutes from "./routes/userRoutes.js";
// import postRoutes from "./routes/postRoutes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGOURL || "mongodb://localhost:27017/pvthetest";

mongoose.connect(MONGOURL).then(() => {
    console.log("DB is connected successfully!");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((err) => console.log(`DB ERR: ${err}`))


const studentSchema = new mongoose.Schema({
    name:String,
    age:Number
}, { collection: 'student' })

const StudentModal = new mongoose.model("student", studentSchema)


app.get("/get_student_data", async (req, res)=>{
    const studentdata = await StudentModal.find();
    // console.log("studentdata::", studentdata)
    res.json(studentdata);
});