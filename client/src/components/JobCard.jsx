import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const naviagate = useNavigate();

  return (
    <div className="border p-6 shadow rounded bg-[#F2F2F2] border-[#E0D4D4]">
      <div className="flex justify-between items-center">
        <img className="h-10 rounded" src={job.companyId.image} alt="" />
      </div>
      <h4 className="font-semibold text-xl mt-3 font-primary">{job.title}</h4>
      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className="bg-textBgLight border border-textBgLight px-4 py-1.5 rounded-lg font-primary font-medium text-primary">
          {job.location}
        </span>
        <span className="bg-textBgSoft border border-textBgSoft px-4 py-1.5 rounded font-primary font-medium text-secondary">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-500 text-sm mt-4"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 200) }}
      ></p>
      <div className="mt-4 flex gap-4 text-sm">
        <button
          onClick={() => {
            naviagate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="bg-primary text-white px-6 py-2 rounded-lg font-primary hover:bg-slate-600 transition duration-300 ease-in-out"
        >
          Apply now
        </button>
        <button
          onClick={() => {
            naviagate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="text-gray-500 border border-gray-500 rounded-lg px-4 py-2 font-primary hover:bg-slate-200 transition duration-300 ease-in-out "
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
