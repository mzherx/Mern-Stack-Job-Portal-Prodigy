import express from "express";
import {
  ChangeJobApplicationStatus,
  changeVisiblity,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  loginCompany,
  postJob,
  registerCompany,
} from "../controller/comapanyController.js";
import upload from "../config/multer.js";
import { protectCompany } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register a company
router.post("/register", upload.single("image"), registerCompany);

// Company Login
router.post("/login", loginCompany);

// Get company Data
router.get("/company", protectCompany, getCompanyData);

// Post a job
router.post("/post-job", protectCompany, postJob);

// Get Applicants Data
router.get("/applicants", protectCompany, getCompanyJobApplicants);

// Get company Job List
router.get("/list-jobs", protectCompany, getCompanyPostedJobs);

// Change Applications Status
router.post("/change-status", protectCompany, ChangeJobApplicationStatus);

// Change Applications Visiblity
router.post("/change-visibility", protectCompany, changeVisiblity);

export default router;
