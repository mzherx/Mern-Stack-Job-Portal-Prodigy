import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FileText, File, Edit, Download, Briefcase } from "lucide-react";

const Applications = () => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  const context = useContext(AppContext);
  const { backendUrl, userData, userApplications, fetchUserData } = context;
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const updateResume = async () => {
    try {
      if (!resume) {
        toast.error("Please select a resume file.");
        return;
      }

      const formData = new FormData();
      formData.append("resume", resume);

      const token = await getToken();

      const { data } = await axios.post(
        `${backendUrl}/api/users/update-resume`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        await fetchUserData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to update resume. Please try again.");
    }

    setIsEdit(false);
    setResume(null);
  };

  // Get status color based on application status
  const getStatusColor = (status) => {
    switch(status) {
      case "Accepted":
        return { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" };
      case "Rejected":
        return { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" };
      case "Interview":
        return { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" };
      default:
        return { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" };
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="container px-4 mx-auto py-12 max-w-6xl">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Applications</h1>
          <p className="text-gray-500">Track your job applications and manage your resume</p>
        </motion.div>

        {/* Resume Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Your Resume</h2>
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
            {isEdit || (userData && !userData.resume) ? (
              <div className="flex flex-wrap gap-3 w-full">
                <label className="flex items-center cursor-pointer bg-white border border-blue-200 rounded-lg px-4 py-3 hover:bg-blue-50 transition-colors duration-200 group" htmlFor="resumeUpload">
                  <Download className="w-5 h-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-blue-600 font-medium">
                    {resume ? resume.name : "Select Resume"}
                  </span>
                  <input
                    id="resumeUpload"
                    type="file"
                    hidden
                    accept="application/pdf"
                    onChange={(e) => setResume(e.target.files[0])}
                  />
                </label>
                <button
                  onClick={updateResume}
                  className="bg-blue-600 text-white font-medium rounded-lg px-6 py-3 hover:bg-blue-700 transition-colors duration-200 flex items-center"
                >
                  <span>Save Resume</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3 w-full">
                <a 
                  className="flex items-center bg-blue-50 text-blue-600 font-medium px-5 py-3 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  href={userData?.resume || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <File className="w-5 h-5 mr-2" />
                  View Resume
                </a>
                <button
                  onClick={() => setIsEdit(true)}
                  className="flex items-center bg-white text-gray-600 font-medium border border-gray-200 px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Update Resume
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Applications Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Jobs Applied</h2>
          </div>

          {userApplications?.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 px-4 text-left font-semibold text-gray-600">Company</th>
                    <th className="py-4 px-4 text-left font-semibold text-gray-600">Job Title</th>
                    <th className="py-4 px-4 text-left font-semibold text-gray-600 max-sm:hidden">Location</th>
                    <th className="py-4 px-4 text-left font-semibold text-gray-600 max-sm:hidden">Date</th>
                    <th className="py-4 px-4 text-left font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {userApplications.map((job, index) => {
                    const statusColors = getStatusColor(job.status);
                    return (
                      <motion.tr 
                        key={job.id || index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="border-b border-gray-50 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 overflow-hidden border border-gray-200">
                              <img
                                className="w-full h-full object-cover"
                                src={job.companyId?.image || assets.default_company_icon}
                                alt={`${job.companyId?.name || "Company"} Logo`}
                              />
                            </div>
                            <span className="font-medium text-gray-800">{job.companyId?.name || "Unknown Company"}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-700">{job.jobId?.title || "N/A"}</td>
                        <td className="py-4 px-4 text-gray-700 max-sm:hidden">
                          {job.jobId?.location || "N/A"}
                        </td>
                        <td className="py-4 px-4 text-gray-600 max-sm:hidden">
                          {moment(job.date).format("MMM DD, YYYY")}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`${statusColors.bg} ${statusColors.text} ${statusColors.border} border px-3 py-1 rounded-full text-sm font-medium`}
                          >
                            {job.status || "Pending"}
                          </span>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <img 
                src={assets.default_company_icon || "/empty-state.svg"} 
                alt="No applications" 
                className="w-24 h-24 mb-4 opacity-40"
              />
              <h3 className="text-lg font-medium text-gray-700 mb-1">No applications yet</h3>
              <p className="text-gray-500 text-center mb-6">Start applying to jobs to see your applications here.</p>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Browse Jobs
              </button>
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Applications;