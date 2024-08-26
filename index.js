import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from 'body-parser';
import cors from "cors";

// Routers 
import StudentRoutes from "./routes/student.js"
import AddSchoolStudentRoute from './routes/SchoolStudent/addSchoolStudent.js'; 
import AddProductRoute from "./routes/Product/addProduct.js"

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(cors())

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGOURL || "mongodb://localhost:27017/pvthetest";

mongoose.connect(MONGOURL).then(() => {
    console.log("DB is connected successfully!");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((err) => console.log(`DB ERR: ${err}`))


app.use(StudentRoutes)
app.use(AddSchoolStudentRoute)

// Product routers
app.use(AddProductRoute)


// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });