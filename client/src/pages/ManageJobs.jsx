import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

const ManageJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { backendUrl, companyToken } = useContext(AppContext);

  // Function to fetch company Job Applications
  const fetchCompanyJobs = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(backendUrl + "/api/company/list-jobs", {
        headers: { token: companyToken },
      });

      if (data.success) {
        setJobs(data.jobsData.reverse());
        console.log(data.jobsData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to change Job Visibility
  const changeJobVisiblity = async (id) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/change-visibility",
        { id },
        {
          headers: { token: companyToken },
        }
      );
      if (data.success) {
        toast.success(data.message);
        fetchCompanyJobs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobs();
    }
  }, [companyToken]);

  if (isLoading) return <Loading />;

  if (jobs && jobs.length === 0) {
    return (
      <div className="flex items-center justify-center h-[70vh] bg-white rounded-xl shadow-md">
        <p className="text-xl sm:text-2xl text-gray-600">No Jobs Available or posted</p>
      </div>
    );
  }

  return (
    <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
    >
      <div className="container p-4 mx-auto">
        {/* Dashboard Header */}
        <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">Manage Jobs</h1>
          <p className="text-gray-600">View, update, and manage your job listings</p>
        </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
        >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-primary">
            <p className="text-gray-500 text-sm mb-1">Total Jobs</p>
            <p className="text-2xl font-bold text-primary">{jobs.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
            <p className="text-gray-500 text-sm mb-1">Active Jobs</p>
            <p className="text-2xl font-bold text-green-600">
              {jobs.filter(job => job.visible).length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-500">
            <p className="text-gray-500 text-sm mb-1">Total Applicants</p>
            <p className="text-2xl font-bold text-blue-600">
              {jobs.reduce((sum, job) => sum + job.applicants, 0)}
            </p>
          </div>
        </div>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-primary">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="py-4 px-6 text-left max-sm:hidden sm:text-[16px] font-semibold">#</th>
                  <th className="py-4 px-6 text-left sm:text-[16px] font-semibold">Job Title</th>
                  <th className="py-4 px-6 text-left max-sm:hidden sm:text-[16px] font-semibold">
                    Date
                  </th>
                  <th className="py-4 px-6 text-left max-sm:hidden sm:text-[16px] font-semibold">
                    Location
                  </th>
                  <th className="py-4 px-6 text-center sm:text-[16px] font-semibold">
                    <span className="flex items-center justify-center">
                      Applicants
                    </span>
                  </th>
                  <th className="py-4 px-6 text-center sm:text-[16px] font-semibold">Visible</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr 
                    key={index} 
                    className="text-gray-700 sm:text-[15px] border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6 max-sm:hidden">
                      {index + 1}
                    </td>
                    <td className="py-4 px-6 font-medium">{job.title}</td>
                    <td className="py-4 px-6 max-sm:hidden">
                      {moment(job.date).format("ll")}
                    </td>
                    <td className="py-4 px-6 max-sm:hidden">
                      {job.location}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          job.applicants > 0 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {job.applicants}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            onChange={() => changeJobVisiblity(job._id)}
                            className="sr-only peer"
                            type="checkbox"
                            checked={job.visible}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/dashboard/add-job")}
            className="bg-primary text-white py-3 px-6 rounded-xl font-medium hover:bg-primary/90 transition duration-300 ease-in-out flex items-center gap-2 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add new Job
          </button>
        </div>
      </div>
      </motion.div>
  );
};

export default ManageJobs;