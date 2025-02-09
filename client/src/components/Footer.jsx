import React from "react";
import logo from "../assets/newlogo.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    
    <section className="pt-16 pb-7 bg-gray-900 mt-[10rem]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Signup Section */}
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
        <div className="grid grid-cols-12 pb-12 border-b-2 border-gray-700 max-lg:gap-7">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-primary font-bold text-4xl leading-tight text-white mb-2 max-lg:text-center">
              Sign up to Prodigy
            </h2>
            <p className="text-base text-gray-400 font-normal max-lg:text-center">
              Stay informed with the latest job opportunities, updates, and
              announcements.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 items-center">
            <div className="flex items-center justify-between bg-gray-800 w-full max-w-md mx-auto lg:mr-0 rounded-full p-2.5 pl-8 border border-gray-700 transition-all duration-300 hover:border-primary focus-within:border-gray-400">
              <input
                type="text"
                className="bg-transparent text-base font-normal text-white placeholder-gray-500 focus:outline-none"
                placeholder="Your email here..."
              />
              <button className="py-3 px-7 hidden min-[470px]:block rounded-full bg-primary text-base font-semibold text-white shadow-sm transition-all duration-500 hover:bg-[#444444] focus:outline-none">
                Submit
              </button>
            </div>
            <button className="py-3 px-7 min-[470px]:hidden rounded-full bg-violet-500 text-base font-semibold text-white shadow-sm transition-all duration-500 hover:bg-violet-700 focus:outline-none">
              Submit
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 gap-y-8 py-14 border-b-2 border-gray-700">
          <div>
            <h6 className="text-xl font-bold text-white mb-7 font-primary">
              Prodigy
            </h6>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-bold text-white mb-7 font-primary">
              Job Seekers
            </h6>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Resume Builder
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Job Listings
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Career Guidance
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Skill Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-bold text-white mb-7 font-primary">
              Resources
            </h6>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Quick Start
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  User Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-bold text-white mb-7 font-primary">
              Support
            </h6>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  License
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus:outline-none"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-3 flex flex-col min-[500px]:flex-row items-center justify-between">
          <a href="/" className=" py-1.5">
            <img
              src={logo}
              alt="Prodigy Logo"
              width="190"
              height="33"
              className="filter invert"
            />
          </a>

          <p className="text-sm text-gray-400 mt-4 min-[500px]:mt-0 px-10">
            © 2025 Prodigy. All rights reserved.
          </p>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
