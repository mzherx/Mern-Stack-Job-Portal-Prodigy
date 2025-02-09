import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import kConvert from "k-convert";
import moment from "moment";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/clerk-react";
import Calltoaction from "../components/Calltoaction";
import { motion } from "framer-motion";


const ApplyJob = () => {
  const { id } = useParams();
  const { getToken } = useAuth();
  const [JobsData, setJobData] = useState(null);
  const [isAlreadyApplied, setAlreadyApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    jobs = [],
    backendUrl,
    userData,
    userApplications = [],
    fetchUserApplications,
  } = useContext(AppContext);

  // Fetch job details
  const fetchJob = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/jobs/${id}`);
      if (data.success) {
        // Wait for both data fetch and minimum 3s delay
        setTimeout(() => {
          setJobData(data.job);
          setIsLoading(false);
        }, 2000);
      } else {
        setIsLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to fetch job details. Please try again later.");
    }
  };

  // Handle job application
  const applyHandler = async () => {
    try {
      if (!userData) {
        return toast.error("Please login to apply.");
      }

      if (!userData.resume) {
        return toast.error("Upload a resume to apply.");
      }

      const token = await getToken();
      const { data } = await axios.post(
        `${backendUrl}/api/users/apply`,
        { jobId: JobsData?._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        fetchUserApplications();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error applying for the job. Please try again.");
    }
  };

  // Check if user already applied
  const checkAlreadyApplied = () => {
    if (JobsData && userApplications && userApplications.length > 0) {
      const hasApplied = userApplications.some(
        (item) => item.jobId?._id === JobsData._id
      );
      setAlreadyApplied(hasApplied);
    }
  };

  // Fetch job data when component mounts or `id` changes
  useEffect(() => {
    if (id) fetchJob();
  }, [id, backendUrl]);

  // Check application status when `JobsData` or `userApplications` changes
  useEffect(() => {
    checkAlreadyApplied();
  }, [JobsData, userApplications]);

  return isLoading || !JobsData ? (
    <Loading /> ) :(
    <>
      <Navbar />
      <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }} // Prevents re-triggering when scrolling back
          >
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-[100px] mb-6 bg-[#add5ffd0]  border border-[#147BEA] rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-[90px]  rounded-xl  mr-4 max-md:mb-4 border-2 border-[#147BEA] bg-[#ffffff85] p-2"
                src={JobsData?.companyId?.image || assets.placeholder}
                alt="Company Logo"
              />
              <div className="text-enter font-primary text-[#0750B2] md:text-left sm:pl-10">
                <h1 className="text-2xl font-semibold text-center sm:text-left font-primary sm:text-[30px] sm:pb-3">
                  {JobsData?.title || "Job Title"}
                </h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-3">
                    <img src={assets.suitcase_icon} alt="Icon" />
                    {JobsData?.companyId?.name || "Company Name"}
                  </span>
                  <span className="flex items-center gap-3">
                    <img src={assets.location_icon} alt="Location Icon" />
                    {JobsData?.location || "Location"}
                  </span>
                  <span className="flex items-center gap-3">
                    <img src={assets.person_icon} alt="Level Icon" />
                    {JobsData?.level || "Experience Level"}
                  </span>
                  <span className="flex items-center gap-3">
                    <img src={assets.money_icon} alt="Money Icon" />
                    CTC: {JobsData?.salary ? kConvert.convertTo(JobsData.salary) : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button
                onClick={applyHandler}
                disabled={isAlreadyApplied}
                className={`p-5 text-[12px] sm:text-[15px] font-primary font-semibold px-[30px] sm:px-[35px] rounded-xl ${
                  isAlreadyApplied
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary text-white  hover:bg-slate-600 transition duration-300 ease-in-out"
                }`}
              >
                {isAlreadyApplied ? "Already Applied" : "Apply Now"}
              </button>
              <p className="mt-2 text-gray-600 font-primary text-[12px]">
                Posted {moment(JobsData?.date).fromNow()}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="font-semibold text-3xl mb-4 font-primary">Job Description</h2>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: JobsData?.description || "" }}
              ></div>
              <button
                onClick={applyHandler}
                disabled={isAlreadyApplied}
                className={`p-5 text-[12px] sm:text-[15px] font-primary font-semibold px-[30px] sm:px-[35px] rounded-xl ${
                  isAlreadyApplied
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary text-white  hover:bg-slate-600 transition duration-300 ease-in-out"
                }`}
              >
                {isAlreadyApplied ? "Already Applied" : "Apply Now"}
              </button>
            </div>

            <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
              <h2>More jobs from {JobsData?.companyId?.name}</h2>
              {jobs
                .filter(
                  (job) =>
                    job._id !== JobsData._id &&
                    job.companyId._id === JobsData.companyId._id
                )
                .slice(0, 4)
                .map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Calltoaction />
      <Footer />
      </motion.div>
    </>
  ) 
  ;
};

export default ApplyJob;