import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiBookmark, FiMapPin, FiBriefcase, FiDollarSign, FiClock } from "react-icons/fi";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to remove HTML tags from description
  const stripHtmlTags = (html) => {
    if (!html) return 'No description provided';
    return html.replace(/<[^>]*>?/gm, '');
  };

  // Function to calculate time passed since posting
  const getTimePassed = (dateString) => {
    if (!dateString) return "Recently posted";
    
    const postedDate = new Date(dateString);
    const currentDate = new Date();
    const timeDiff = currentDate - postedDate;
    
    // Calculate time differences
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    
    return "Just now";
  };

  // Salary formatting function
  const formatSalary = (salary) => {
    if (!salary) return "Salary available";
    if (typeof salary === 'string') return salary;
    if (typeof salary === 'object') {
      if (salary.min && salary.max) {
        return `$${salary.min.toLocaleString()} - $${salary.max.toLocaleString()}`;
      }
      if (salary.amount) {
        return `$${salary.amount.toLocaleString()}`;
      }
    }
    return "Salary available";
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${isHovered ? 'shadow-lg border-primary/20' : 'hover:shadow-md'}`}>
        {/* Header with company info */}
        <div className="p-6 pb-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <motion.div 
                className="w-14 h-14 rounded-lg bg-white border border-gray-100 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  className="w-full h-full object-contain p-1" 
                  src={job.companyId?.image || '/default-company.png'} 
                  alt={job.companyId?.name || 'Company logo'} 
                  onError={(e) => {
                    e.target.src = '/default-company.png';
                  }}
                />
              </motion.div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">{job.title || 'Job Title'}</h4>
                <p className="text-gray-500 text-sm">{job.companyId?.name || 'Company'}</p>
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsSaved(!isSaved);
              }}
              className={`p-2 rounded-full ${isSaved ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
              aria-label={isSaved ? "Remove from saved jobs" : "Save this job"}
            >
              <FiBookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Job details */}
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              <FiMapPin className="w-3 h-3" />
              {job.location || 'Remote'}
            </span>
            <span className="flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
              <FiBriefcase className="w-3 h-3" />
              {job.level || 'Not specified'}
            </span>
            <span className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              <FiDollarSign className="w-3 h-3" />
              {formatSalary(job.salary)}
            </span>
            {job.type && (
              <span className="flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                <FiClock className="w-3 h-3" />
                {job.type}
              </span>
            )}
          </div>

          {/* Description with HTML tags removed */}
          <div className="mb-4">
            <p className="text-gray-600 text-sm line-clamp-3">
              {stripHtmlTags(job.description)}
            </p>
          </div>

          {/* Skills/tags */}
          {job.skills && job.skills.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {job.skills.slice(0, 4).map((skill, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
                {job.skills.length > 4 && (
                  <span className="bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full text-xs">
                    +{job.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer with action buttons */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">
              Posted {getTimePassed(job.postedAt)}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  navigate(`/apply-job/${job._id}`);
                  window.scrollTo(0, 0);
                }}
                className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Learn More
              </button>
              <button
                onClick={() => {
                  navigate(`/apply-job/${job._id}`);
                  window.scrollTo(0, 0);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Hover effect indicator */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
    </motion.div>
  );
};

JobCard.defaultProps = {
  job: {
    title: '',
    companyId: {
      name: '',
      image: ''
    },
    location: '',
    level: '',
    salary: null,
    type: '',
    description: '',
    skills: [],
    postedAt: null,
    _id: ''
  }
};

export default JobCard;