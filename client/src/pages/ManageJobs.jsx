import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { manageJobsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

const ManageJobs = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState(false);

  const { backendUrl, companyToken } = useContext(AppContext);

  // Function to fetch company Job Applications
  const fetchCompanyJobs = async () => {
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
    }
  };

  // Function to change Job Visiblility
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
      } else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobs();
    }
  }, [companyToken]);

  return  jobs ? jobs.length === 0 ? (
    
  <div className='flex items-center justify-center h-[70vh]'>
    <p className='text-xl sm:text-2xl '>No Jobs Available or posted</p>
  </div>) : (
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
    <div className="container p-4 mx-auto ">
      <div className="overflow-x-auto w-full rounded-xl">
      <table className="w-full bg-[#F2F2F2] border border-gray-300 rounded-xl max-sm:text-sm text-primary">
          <thead className="bg-[#F2F2F2]">
            <tr >
              <th className="py-2 px-4 border-b text-left max-sm:hidden sm:text-[20px]  ">#</th>
              <th className="py-2 px-4 border-b text-left sm:text-[18px] font-secondary font-semibold ">Job Title</th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden sm:text-[16px] font-secondary font-semibold">
                Date
              </th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden sm:text-[16px] font-secondary font-semibold">
                Location
              </th>
              <th className="py-2 px-4 border-b text-center sm:text-[16px] font-secondary font-semibold">Applicants</th>
              <th className="py-2  border-b text-left sm:text-[16px] font-secondary font-semibold ">Visible</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className="text-[#575656] sm:text-[17px] font-secondary font-normal border-2 border-[#dad8d8] ">
                <td className="py-6 px-4 border-b max-sm:hidden text-black ">
                  {index + 1}
                </td>
                <td className="py-6 px-4 border-b font-semibold">{job.title}</td>
                <td className="py-6 px-4 border-b max-sm:hidden">
                  {moment(job.date).format("ll")}
                </td>
                <td className="py-6 px-4 border-b max-sm:hidden">
                  {job.location}
                </td>
                <td className="py-6 px-4 border-b text-center">
                  {job.applicants}
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    onChange={() => changeJobVisiblity(job._id)}
                    className="scale-125  text-primary"
                    type="checkbox"
                    checked={job.visible}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="bg-primary text-white py-4 px-7 text-[13px] rounded-xl font-primary font-semibold hover:bg-slate-600 transition duration-300 ease-in-out "
        >
          Add new Job
        </button>
        <button></button>
      </div>
    </div>
    </motion.div>
  ): <Loading />
};

export default ManageJobs;
