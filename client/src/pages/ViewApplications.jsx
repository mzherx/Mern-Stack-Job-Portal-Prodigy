import React, { useContext, useEffect, useState, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, FileText, ChevronDown, User, MapPin, Briefcase, MoreHorizontal, Search } from "lucide-react";

const ViewApplications = () => {
  const { backendUrl, companyToken } = useContext(AppContext);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const menuRef = useRef(null);

  const fetchCompanyJobApplications = async () => {
    try {
      setLoading(true);
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
        setActiveDropdown(null);
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

  // Filter applicants based on search term and status filter
  const filteredApplicants = applicants
    .filter(item => item.jobId && item.userId)
    .filter(applicant => {
      const matchesSearch = searchTerm === "" || 
        (applicant.userId?.name && applicant.userId.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (applicant.jobId?.title && applicant.jobId.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (applicant.jobId?.location && applicant.jobId.location.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = filterStatus === "all" || 
        (filterStatus === "pending" && applicant.status === "pending") ||
        (filterStatus === "accepted" && applicant.status === "Accepted") ||
        (filterStatus === "rejected" && applicant.status === "Rejected");
      
      return matchesSearch && matchesStatus;
    });

  const getStatusBadge = (status) => {
    switch(status) {
      case "Accepted":
        return (
          <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-3 py-2 rounded-full text-sm font-medium">
            <Check size={14} />
            <span>Accepted</span>
          </div>
        );
      case "Rejected":
        return (
          <div className="flex items-center gap-1 bg-red-50 text-red-600 px-3 py-2 rounded-full text-sm font-medium">
            <X size={14} />
            <span>Rejected</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-full text-sm font-medium">
            <ChevronDown size={14} />
            <span>Pending</span>
          </div>
        );
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">Application Management</h1>
          <p className="text-gray-500">Review and manage candidate applications</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6"
        >
          {/* Filters and Search */}
          <div className="p-5 border-b border-gray-100 flex flex-wrap gap-4 items-center justify-between">
            <div className="relative flex-1 min-w-[250px]">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search applicants..."
                className="pl-10 pr-4 py-2.5 w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setFilterStatus("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterStatus === "all" 
                    ? "bg-blue-100 text-blue-600" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setFilterStatus("pending")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterStatus === "pending" 
                    ? "bg-blue-100 text-blue-600" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Pending
              </button>
              <button 
                onClick={() => setFilterStatus("accepted")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterStatus === "accepted" 
                    ? "bg-emerald-100 text-emerald-600" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Accepted
              </button>
              <button 
                onClick={() => setFilterStatus("rejected")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterStatus === "rejected" 
                    ? "bg-red-100 text-red-600" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Rejected
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto w-full">
            <table className="w-full">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="py-4 px-5 text-left text-sm font-semibold">#</th>
                  <th className="py-4 px-5 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>Applicant</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 text-left text-sm font-semibold max-md:hidden">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span>Job Position</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 text-left text-sm font-semibold max-md:hidden">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Location</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <FileText size={16} />
                      <span>Resume</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              
              <tbody>
                {filteredApplicants.length === 0 ? (
                  <tr>
                    <td colSpan="6">
                      <div className="flex flex-col items-center justify-center py-16">
                        <img 
                          src={assets.default_company_icon || "/empty-state.svg"} 
                          alt="No applications" 
                          className="w-20 h-20 mb-4 opacity-30"
                        />
                        <h3 className="text-lg font-medium text-gray-700 mb-1">No applications found</h3>
                        <p className="text-gray-500 text-center mb-2">No matching applications with the current filters</p>
                        {(searchTerm || filterStatus !== "all") && (
                          <button 
                            onClick={() => {
                              setSearchTerm("");
                              setFilterStatus("all");
                            }}
                            className="mt-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                          >
                            Clear filters
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredApplicants.map((applicant, index) => (
                    <motion.tr 
                      key={applicant._id || index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="py-4 px-5 text-sm text-gray-600">{index + 1}</td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                            <img
                              className="w-full h-full object-cover"
                              src={applicant.userId?.image || assets.default_avatar}
                              alt={`${applicant.userId?.name || 'Applicant'}'s avatar`}
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{applicant.userId?.name || 'Unknown'}</div>
                            <div className="text-gray-500 text-sm md:hidden">{applicant.jobId?.title || 'N/A'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-gray-700 max-md:hidden">
                        {applicant.jobId?.title || 'N/A'}
                      </td>
                      <td className="py-4 px-5 text-gray-700 max-md:hidden">
                        {applicant.jobId?.location || 'Remote'}
                      </td>
                      <td className="py-4 px-5">
                        <a
                          href={applicant.userId?.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                        >
                          <FileText size={16} />
                          View Resume
                        </a>
                      </td>
                      <td className="py-4 px-5 relative">
                        {applicant.status === "pending" ? (
                          <div className="relative">
                            <button 
                              onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                              className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors flex items-center gap-1"
                            >
                              <span>Pending</span>
                              <MoreHorizontal size={16} />
                            </button>
                            
                            <AnimatePresence>
                              {activeDropdown === index && (
                                <motion.div 
                                  ref={menuRef}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute right-0 top-full mt-1 z-10 w-36 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden"
                                >
                                  <button
                                    onClick={() => {
                                      changeJobApplicationStatus(applicant._id, "Accepted");
                                      setActiveDropdown(null);
                                    }}
                                    className="w-full px-4 py-3 text-left text-sm font-medium text-green-600 hover:bg-green-50 flex items-center gap-2 transition-colors"
                                  >
                                    <Check size={16} />
                                    Accept
                                  </button>
                                  <button
                                    onClick={() => {
                                      changeJobApplicationStatus(applicant._id, "Rejected");
                                      setActiveDropdown(null);
                                    }}
                                    className="w-full px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                                  >
                                    <X size={16} />
                                    Reject
                                  </button>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          getStatusBadge(applicant.status)
                        )}
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ViewApplications;