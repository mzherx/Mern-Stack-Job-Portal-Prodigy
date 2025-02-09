import React, { useContext, useEffect, useState, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ViewApplications = () => {
  const { backendUrl, companyToken } = useContext(AppContext);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null); // State for active dropdown
  const menuRef = useRef(null);

  const fetchCompanyJobApplications = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/company/applicants`, {
        headers: { token: companyToken },
      });

      if (data.success) {
        setApplicants(data.applications.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const changeJobApplicationStatus = async (id, status) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/company/change-status`,
        { id, status },
        { headers: { token: companyToken } }
      );

      if (data.success) {
        fetchCompanyJobApplications();
        toast.success(`Application ${status.toLowerCase()} successfully`);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null); // Close dropdown when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobApplications();
    }
  }, [companyToken]);

  if (loading) {
    return <Loading />;
  }

  return (
    <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }} // Prevents re-triggering when scrolling back
        >
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto w-full rounded-xl shadow-lg ">
        <table className="w-full bg-white border-collapse border-gray-300 rounded-xl">
          <thead className="bg-[#f2f2f2] text-primary">
            <tr className='border-gray-300 rounded-xl'>
              <th className="py-7 px-3 sm:px-4 text-left w-[5%] text-base font-semibold">#</th>
              <th className="py-7 px-3 sm:px-4 text-left w-[25%] text-base font-semibold">User name</th>
              <th className="py-7 px-3 sm:px-4 text-left max-sm:hidden w-[20%] text-base font-semibold">Job Title</th>
              <th className="py-7 px-3 sm:px-4 text-left max-sm:hidden w-[15%] text-base font-semibold">Location</th>
              <th className="py-7 px-3 sm:px-4 text-left w-[20%] text-base font-semibold">Resume</th>
              <th className="py-7 px-3 sm:px-4 text-left w-[15%] text-base font-semibold">Action</th>
            </tr>
          </thead>
          
          <tbody>
            {applicants.filter(item => item.jobId && item.userId).length === 0 ? (
              <tr>
                <td colSpan="6" className="py-8 text-center text-gray-500 text-lg">
                  No applications found
                </td>
              </tr>
            ) : (
              applicants
                .filter((item) => item.jobId && item.userId)
                .map((applicant, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-3 sm:px-4 border-b text-center text-base">{index + 1}</td>
                    <td className="py-5 px-3 sm:px-4 border-b flex items-center">
                      <img
                        className="w-10 h-10 rounded mr-3 max-sm:hidden object-cover"
                        src={applicant.userId?.image || assets.default_avatar}
                        alt="User avatar"
                      />
                      <span className="text-base">{applicant.userId?.name || 'Unknown'}</span>
                    </td>
                    <td className="py-5 px-3 sm:px-4 border-b max-sm:hidden text-base">
                      {applicant.jobId?.title || 'N/A'}
                    </td>
                    <td className="py-5 px-3 sm:px-4 border-b max-sm:hidden text-base">
                      {applicant.jobId?.location || 'Remote'}
                    </td>
                    <td className="py-5 px-3 sm:px-4 border-b">
                      <a
                        href={applicant.userId?.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-50 text-primary px-4 py-2 rounded-md flex items-center justify-start gap-2 text-base hover:bg-blue-100 transition-colors w-full"
                      >
                        Resume <img className="w-5 h-5" src={assets.resume_download_icon} alt="Download" />
                      </a>
                    </td>
                    <td className="py-5 px-3 sm:px-4 border-b relative">
                      {applicant.status === "pending" ? (
                        <div className="relative group">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveDropdown(activeDropdown === index ? null : index); // Toggle dropdown for specific applicant
                            }}
                            className="text-gray-600 hover:text-gray-800 px-2 py-1 rounded text-2xl"
                          >
                            ⋯
                          </button>
                          {activeDropdown === index && (
                            <div 
                              className="absolute right-[0px] bottom-1 z-10  w-30 bg-white border border-gray-200 rounded-lg shadow-xl"
                              ref={menuRef}
                            >
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  changeJobApplicationStatus(applicant._id, "Accepted");
                                  setActiveDropdown(null);
                                }}
                                className="w-full px-4 py-3 text-left text-base text-green-600 hover:bg-gray-100 border-b"
                              >
                                Accept
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  changeJobApplicationStatus(applicant._id, "Rejected");
                                  setActiveDropdown(null);
                                }}
                                className="w-full px-4 py-3 text-left text-base text-red-600 hover:bg-gray-100"
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className={`px-4 py-2 rounded text-base ${
                          applicant.status === "Accepted" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-red-100 text-red-700"
                        }`}>
                          {applicant.status}
                        </div>
                      )}
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
    </motion.div>
  );
};

export default ViewApplications;