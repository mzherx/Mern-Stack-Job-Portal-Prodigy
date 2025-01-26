import express from "express";
import { getJobById, getJobs } from "../controller/jobController.js";

const router = express.Router();
// Routes to get all jobs data
router.get('/', getJobs);


//  Route to get a single job by ID
router.get('/:id', getJobById);

export default router;