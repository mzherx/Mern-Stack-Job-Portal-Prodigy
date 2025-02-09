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


const Applications = () => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  const context = useContext(AppContext);
  const { backendUrl, userData, userApplications, fetchUserData } = context;

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

  return (
    <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }} // Prevents re-triggering when scrolling back
        >
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit || (userData && !userData.resume) ? (
            <>
              <label className="flex items-center cursor-pointer" htmlFor="resumeUpload">
                <p className="bg-blue-100 text-primary px-4 py-2 rounded-lg mr-2">
                  {resume ? resume.name : "Select Resume"}
                </p>
                <input
                  id="resumeUpload"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setResume(e.target.files[0])}
                />
                <img src={assets.profile_upload_icon}  alt="Upload Icon" />
              </label>
              <button
                onClick={updateResume}
                className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a 
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
                href={userData?.resume || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <h2 className="text-2xl font-semibold mb-4 font-primary mt-4">Jobs Applied</h2>
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className='text-primary text-semibold text-xl'>
              <th className="py-4 px-4 border-b text-left">Company</th>
              <th className="py-4 px-4 border-b text-left">Job Title</th>
              <th className="py-4 px-4 border-b text-left max-sm:hidden">Location</th>
              <th className="py-4 px-4 border-b text-left max-sm:hidden">Date</th>
              <th className="py-4 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {userApplications?.length > 0 ? (
              userApplications.map((job, index) => (
                <tr key={job.id || index}>
                  <td className="py-7 px-4 flex items-center gap-2 border-b">
                    <img
                      className="w-8 h-8 rounded mr-2"
                      src={job.companyId?.image || assets.default_company_icon}
                      alt={`${job.companyId?.name || "Company"} Logo`}
                    />
                    {job.companyId?.name || "Unknown Company"}
                  </td>
                  <td className="py-7 px-5 border-b">{job.jobId?.title || "N/A"}</td>
                  <td className="py-7 px-5 border-b max-sm:hidden">
                    {job.jobId?.location || "N/A"}
                  </td>
                  <td className="py-7 px-5 border-b max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-7 px-5 border-b">
                    <span
                      className={`${
                        job.status === "Accepted"
                          ? "bg-[#00ff2a31] text-[#42b323]"
                          : job.status === "Rejected"
                          ? "bg-[#ff00003d] text-[#ff0000]"
                          : "bg-[#007bff31] text-[#007AFF]"
                      } px-4 py-1.5 rounded-lg`}
                    >
                      {job.status || "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Applications;
