import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema({
    userId: { type: String, required: true, ref: "User" },
    companyId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Company" },
    jobId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Job" },
    status: { type: String, required: true, default: "pending" },
    date: { type:Number, required: true}
})

const JobApplication = mongoose.model('JobApplication', JobApplicationSchema)

export default JobApplication;
