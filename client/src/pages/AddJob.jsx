import Quill from "quill";
import React, { useContext, useEffect, useRef, useState } from "react";
import { JobCategories, JobLocations } from "../assets/assets";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Junior Level");
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const { backendUrl, companyToken } = useContext(AppContext);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const description = quillRef.current.root.innerHTML;

      const { data } = await axios.post(
        backendUrl + "/api/company/post-job",
        { title, description, location, category, level, salary },
        { headers: { token: companyToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setTitle("");
        setSalary(0);
        quillRef.current.root.innerHTML = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // Initiate Quill only Once
    if (!quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

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
    <form
      onSubmit={onSubmitHandler}
      className="container p-6 bg-white rounded-lg shadow-md"
    >
      <div className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block text-md font-medium text-primary mb-2">
            Job Title
          </label>
          <input
            type="text"
            placeholder="Type here"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary  outline-none  transition duration-300 ease-in-out"
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-md font-medium text-primary mb-2">
            Job Description
          </label>
          <div
            ref={editorRef}
            className="w-full border border-gray-300 rounded-md min-h-[150px] p-2 "
          ></div>
        </div>

        {/* Job Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Job Category */}
          <div>
            <label className="block text-md font-medium text-primary mb-2">
              Job Category
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary  outline-none  transition duration-300 ease-in-out"
              onChange={(e) => setCategory(e.target.value)}
            >
              {JobCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Job Location */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Job Location
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary  outline-none  transition duration-300 ease-in-out"
              onChange={(e) => setLocation(e.target.value)}
            >
              {JobLocations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Job Level */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Job Level
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary  outline-none  transition duration-300 ease-in-out"
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Beginner level">Beginner level</option>
              <option value="Intermediate level">Intermediate level</option>
              <option value="Senior level">Senior level</option>
            </select>
          </div>
        </div>

        {/* Job Salary */}
        <div className="w-full sm:w-48">
          <label className="block text-sm font-medium text-primary mb-2">
            Job Salary
          </label>
          <input
            min={0}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary  outline-none  transition duration-300 ease-in-out"
            onChange={(e) => setSalary(e.target.value)}
            type="number"
            placeholder="2,500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-32 px-6 py-3 bg-primary font-primary text-white rounded-md hover:bg-gray-800  outline-none  transition duration-300 ease-in-out"
        >
          Add
        </button>
      </div>
    </form>
    </motion.div>
  );
};

export default AddJob;
