import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import bgimage from "../assets/bg-image-main.jpg";
import companyLogo from "../assets/facebook-1-logo-svgrepo-com.svg";
import companyLogo1 from "../assets/linkedin-logo-svgrepo-com.svg";
import companyLogo2 from "../assets/slack-logo-svgrepo-com.svg";
import companyLogo3 from "../assets/instagram-logo-svgrepo-com.svg";
import companyLogo4 from "../assets/netflix-2-logo-svgrepo-com.svg";
import companyLogo5 from "../assets/google-1-1-logo-svgrepo-com.svg";
import { motion } from "framer-motion";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  };
  return (
    <motion.div
      style={{ willChange: "transform, opacity" }}
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1], // Use a simpler easing curve
      }}
      viewport={{ once: true }} // Prevents re-triggering when scrolling back
    >
      <div className="container  2xl:px-20 mx-auto my-10">
        <div className="bg-gradient-to-r from-[#004AADC2] to-[#20C0D8C2] text-white py-[130px] text-center mx-3 rounded-xl relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-5 z-0"
            style={{ backgroundImage: `url(${bgimage})` }}
          ></div>

          <div className="relative z-5">
            <h2 className="text-[25px] lg:text-[38px] md:text-[28px]  font-bold sm:mb-4 font-primary leading-[32px] lg:leading-[42px]">
              Make The Best Move to <br /> Choose{" "}
              <span className="font-primary text-secondary">
                Your Dream Job
              </span>
            </h2>

            <p className="mb-8 max-w-xl mx-auto text-sm lg:text-[12px] font-light px-5 leading-tight p-2">
              Your Next Big Career Move Starts Right Here - Explore the Best Job
              Opportunities and Take the First Step Toward Your Future!
            </p>

            <div className="flex items-center justify-between bg-white rounded-lg text-gray-600 py-[15px] px-[12px] pl-4 lg:pl-5  max-w-5xl mx-5 sm:mx-auto sm:p-3  sm:m-2">
              <div className="flex items-center">
                <img
                  className="h-4 sm:h-7 "
                  src={assets.search_icon}
                  alt="Search Icon"
                />
                <input
                  type="text"
                  placeholder="Search for jobs"
                  className="max-sm:text-xs p-2 sm:pl-5 rounded outline-none w-full"
                  ref={titleRef}
                />
              </div>
              <div className="flex items-center">
                <img
                  className="h-4 sm:h-7"
                  src={assets.location_icon}
                  alt="Location Icon"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="max-sm:text-xs p-2 sm:pl-5 rounded outline-none w-full"
                  ref={locationRef}
                />
              </div>
              <div className="relative group">
                <button
                  onClick={onSearch}
                  className="relative inline-block p-px font-semibold leading-6   shadow-2xl rounded-xl shadow-zinc-500 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 "
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100 "></span>
                  <span className="relative z-5 block px-6 py-3 sm:px-12 sm:py-4 rounded-xl bg-primary hover:bg-slate-600 duration-500">
                    <div className="relative z-5 flex items-center space-x-2">
                      <span className="text-white transition-all duration-500 ease-in-out font-primary">
                        Search
                      </span>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Companies who trust us */}

        <div className="border border-[#CFCFCF] shadow-md mx-2 mt-5 p-6 rounded-md flex flex-col sm:flex-row sm:items-center">
          {/* Trusted by */}
          <div className="w-full sm:w-auto sm:mr-4 flex justify-center sm:justify-start">
            <p className="font-medium text-center sm:text-left sm:p-4">
              Trusted by
            </p>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-20 flex-grow">
            <img
              className="h-[70px] w-[70px] grayscale hover:grayscale-0 transition-all duration-300"
              src={companyLogo}
              alt="Logo 1"
            />
            <img
              className="h-[70px] w-[70px] grayscale hover:grayscale-0 transition-all duration-300"
              src={companyLogo1}
              alt="Logo 2"
            />
            <img
              className="h-[70px] w-[70px] grayscale hover:grayscale-0 transition-all duration-300"
              src={companyLogo2}
              alt="Logo 3"
            />
            <img
              className="h-[70px] w-[70px] grayscale hover:grayscale-0 transition-all duration-300"
              src={companyLogo3}
              alt="Logo 4"
            />
            <img
              className="h-[70px] w-[70px] grayscale hover:grayscale-0 transition-all duration-300"
              src={companyLogo4}
              alt="Logo 5"
            />
            <img
              className="h-[70px] w-[70px] grayscale hover:grayscale-0 transition-all duration-300"
              src={companyLogo5}
              alt="Logo 6"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
