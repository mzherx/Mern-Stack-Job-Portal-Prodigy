import React, { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";


const ting = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);

  const initialLoad = useRef(true);
  const [showFilter, setShowFilter] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const [filterJobs, setFilterJobs] = useState(jobs);
  const [fade, setFade] = useState(true);

  // Refs to track previous filter states
  const prevSelectedCategory = useRef(selectedCategory);
  const prevSelectedLocation = useRef(selectedLocation);
  const prevSearchFilter = useRef({ ...searchFilter });

  const triggerTransition = (callback, shouldScroll = true) => {
    setFade(false);
    setTimeout(() => {
      callback();
      setFade(true);
      if (shouldScroll && !initialLoad.current) {
        document.getElementById("job-list")?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 300);
  };

  useEffect(() => {
    const filterJobs = () => {
      const matchesCategory = (job) =>
        selectedCategory.length === 0 || selectedCategory.includes(job.category);

      const matchesLocation = (job) =>
        selectedLocation.length === 0 || selectedLocation.includes(job.location);

      const matchesTitle = (job) =>
        searchFilter.title === "" ||
        job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

      const matchesSearchLocation = (job) =>
        searchFilter.location === "" ||
        job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

      const newFilteredJobs = jobs
        .slice()
        .reverse()
        .filter(
          (job) =>
            matchesCategory(job) &&
            matchesLocation(job) &&
            matchesTitle(job) &&
            matchesSearchLocation(job)
        );

      setFilterJobs(newFilteredJobs);
      setCurrentPage(1);
    };

    // Check if filters changed (excluding jobs update)
    const filtersChanged =
      prevSelectedCategory.current !== selectedCategory ||
      prevSelectedLocation.current !== selectedLocation ||
      JSON.stringify(prevSearchFilter.current) !== JSON.stringify(searchFilter);

    if (initialLoad.current) {
      // Initial load without scroll
      filterJobs();
      initialLoad.current = false;
    } else {
      // Trigger scroll only if filters changed
      triggerTransition(filterJobs, filtersChanged);
    }

    // Update previous filter refs
    prevSelectedCategory.current = selectedCategory;
    prevSelectedLocation.current = selectedLocation;
    prevSearchFilter.current = { ...searchFilter };
  }, [jobs, selectedCategory, selectedLocation, searchFilter]);

  // Handlers remain the same
  const handleCategoryChange = (category) => {
    triggerTransition(() => {
      setSelectedCategory((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
    });
  };

  const handleLocationChange = (location) => {
    triggerTransition(() => {
      setSelectedLocation((prev) =>
        prev.includes(location)
          ? prev.filter((c) => c !== location)
          : [...prev, location]
      );
    });
  };

  const handlePageChange = (newPage) => {
    triggerTransition(() => setCurrentPage(newPage));
  };

  // Rest of the component...


  return (
    
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* COMPLETE FILTER SIDEBAR - 100% PRESERVED */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
          <>
            <h3 className="font-bold text-larger mb-4 font-primary">Current Search</h3>
            <div className="mb-4 text-primary">
              {searchFilter.title && (
                <span className="inline-flex items-center gap-2.5 bg-textBgLight border border-textBgLight px-5 py-1.5 rounded">
                  {searchFilter.title}
                  <img
                    onClick={() => setSearchFilter(prev => ({ ...prev, title: "" }))}
                    className="cursor-pointer"
                    src={assets.cross_icon}
                    alt=""
                  />
                </span>
              )}
            </div>
            {searchFilter.location && (
              <span className="inline-flex items-center gap-2.5 bg-textBgSoft border border-textBgSoft px-4 py-1.5 rounded text-secondary">
                {searchFilter.location}
                <img
                  onClick={() => setSearchFilter(prev => ({ ...prev, location: "" }))}
                  className="cursor-pointer"
                  src={assets.cross_icon}
                  alt=""
                />
              </span>
            )}
          </>
        )}

        <button
          onClick={() => setShowFilter(prev => !prev)}
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
        >
          {showFilter ? "Close" : "Filter"}
        </button>

        <div className={showFilter ? "" : "hidden lg:block"}>
          <h4 className="font-semibold text-larger py-6 font-primary">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li key={index} className="flex gap-3 items-center rounded-lg">
                <input
                  className="scale-125 text-primary rounded-lg"
                  type="checkbox"
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategory.includes(category)}
                  id={category}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className={showFilter ? "" : "hidden lg:block"}>
          <h4 className="font-bold text-larger py-4 pt-14 font-primary">Search by Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.slice(0, showAllLocations ? JobLocations.length : 5).map((location, index) => (
              <li key={index} className="flex gap-3 items-center">
                <input
                  className="scale-125 text-primary rounded-lg"
                  type="checkbox"
                  onChange={() => handleLocationChange(location)}
                  checked={selectedLocation.includes(location)}
                />
                <label className="cursor-pointer" htmlFor={`location-${index}`}>
                  {location}
                </label>
              </li>
            ))}
          </ul>
          
        </div>
      </div>

      {/* JOB LISTING SECTION WITH TRANSITIONS */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-semibold text-4xl py-2 font-primary" id="job-list">
          Latest Jobs
        </h3>
        <p className="mb-8">Get your desired Job from top companies</p>
        
        <div className="relative min-h-[600px]">
          <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {filterJobs
              .slice((currentPage - 1) * 6, currentPage * 6)
              .map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
          </div>
        </div>

        {filterJobs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="disabled:opacity-50 transition-opacity"
            >
              <img src={assets.left_arrow_icon} alt="Previous" />
            </button>
            
            {Array.from({ length: Math.ceil(filterJobs.length / 6) }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-10 h-10 flex items-center justify-center border rounded-xl transition-all duration-300 ${
                  currentPage === index + 1
                    ? "bg-textBgLight text-primary border-primary scale-110"
                    : "text-[#757373] border-[#80858f] hover:border-primary hover:scale-105"
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, Math.ceil(filterJobs.length / 6)))}
              disabled={currentPage === Math.ceil(filterJobs.length / 6)}
              className="disabled:opacity-50 transition-opacity"
            >
              <img src={assets.right_arrow_icon} alt="Next" />
            </button>
          </div>
        )}
      </section>
    </div>
    
  );
};

export default ting;