import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import bgimage from "../assets/bg-image-main.jpg";
import { motion } from "framer-motion";
import { FiSearch, FiMapPin, FiArrowRight } from "react-icons/fi";

// Import company logos directly
import companyLogo1 from "../assets/facebook-1-logo-svgrepo-com.svg";
import companyLogo2 from "../assets/linkedin-logo-svgrepo-com.svg";
import companyLogo3 from "../assets/slack-logo-svgrepo-com.svg";
import companyLogo4 from "../assets/instagram-logo-svgrepo-com.svg";
import companyLogo5 from "../assets/netflix-2-logo-svgrepo-com.svg";
import companyLogo6 from "../assets/google-1-1-logo-svgrepo-com.svg";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const [activeTag, setActiveTag] = useState(null);

  const companyLogos = [
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    companyLogo6,
  ];

  const popularTags = [
    "Developer",
    "Designer",
    "Marketing",
    "Remote",
    "Manager",
  ];

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    titleRef.current.value = tag;
    // Optional: automatically trigger search
    // onSearch({ preventDefault: () => {} });
  };

  const onSearch = (e) => {
    e.preventDefault();
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Floating container with margin on all sides */}
      <section className="relative overflow-hidden mx-4 my-6 lg:mx-8 lg:my-10 rounded-3xl shadow-2xl">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={bgimage}
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-700/80 mix-blend-multiply"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Find Your <span className="text-yellow-300">Dream Job</span>
              <br />
              With Prodigy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
            >
              Your next big career move starts here. Explore thousands of job
              opportunities and take control of your future.
            </motion.p>

            <motion.form
              onSubmit={onSearch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200">
                  <FiSearch className="text-gray-400 text-xl mr-3" />
                  <input
                    type="text"
                    ref={titleRef}
                    placeholder="Job title, keywords, or company"
                    className="w-full text-lg outline-none placeholder-gray-400"
                    defaultValue={activeTag || ""}
                  />
                </div>
                <div className="flex-1 flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200">
                  <FiMapPin className="text-gray-400 text-xl mr-3" />
                  <input
                    type="text"
                    ref={locationRef}
                    placeholder="Location or remote"
                    className="w-full text-lg outline-none placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 font-semibold text-lg flex items-center justify-center transition-all duration-300"
                >
                  Search Jobs
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 text-white/80"
            >
              <span className="mr-3">Popular:</span>
              {popularTags.map((tag, i) => (
                <button
                  key={i}
                  onClick={() => handleTagClick(tag)}
                  className={`inline-block mr-3 mb-2 px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                    activeTag === tag
                      ? "bg-white/30 text-white font-medium"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-br my-10 from-white/95 to-white/80 backdrop-blur-lg py-11 shadow-xl rounded-xl border border-white/20 mx-2 md:mx-7 lg:mx-20 xl:mx-8"
      >
        {/* Background elements remain the same */}
        <div className="absolute inset-0 overflow-hidden">
          {/* ... background animation elements ... */}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.p
            className="text-center text-gray-600 font-medium mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Trusted by innovative companies worldwide
          </motion.p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                  rotate: index % 2 === 0 ? -5 : 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.8,
                  type: "spring",
                  damping: 6,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: index % 2 === 0 ? -3 : 3,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className="h-20 w-20 md:h-24 md:w-30 relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-blue-100/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Logo container with grayscale */}
                <div className="h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img
                    src={logo}
                    alt={`Company ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Pulse animation */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-lg"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* ... particle animations ... */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
