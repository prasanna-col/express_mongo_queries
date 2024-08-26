import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }
})

const schoolStudent = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone:{type:String,required: true },
    age: { type: Number, required: true },
    subjects: { type: [String], required: true },
    enrollment_date: { type: Date, required: true },
    address: { type: addressSchema, required: true }
    // password: { type: String, required: true },
    // schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true

}, { collection: 'schoolstudent' })

const SchoolStudent = mongoose.model("schoolstudent",schoolStudent )

export default SchoolStudent;