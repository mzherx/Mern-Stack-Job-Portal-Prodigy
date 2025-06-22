import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../assets/image-gall.jpg"; // Replace with your high-quality image
import {
  FiSearch,
  FiDollarSign,
  FiBarChart2,
  FiArrowRight,
} from "react-icons/fi";

const AppDownload = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="relative z-10">
            <motion.span
              className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Find faster
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Discover Your <span className="text-blue-600">Dream Job</span>{" "}
              Today
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Join millions of professionals and explore thousands of career
              opportunities. Get personalized matches, salary insights, and
              company reviews - all in one place.
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-4 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <FiSearch className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Smart Job Matching
                  </h3>
                  <p className="text-gray-600">
                    AI-powered recommendations based on your skills and
                    preferences
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600">
                  <FiDollarSign className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Salary Insights
                  </h3>
                  <p className="text-gray-600">
                    See personalized salary estimates for every position
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 p-2 rounded-lg text-purple-600">
                  <FiBarChart2 className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Company Analytics
                  </h3>
                  <p className="text-gray-600">
                    Detailed reviews and ratings for 600,000+ companies
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/jobs"
                className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-center"
              >
                Browse Jobs
              </Link>

              <Link
                to="/recruiter-dashboard"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-blue-700 font-medium rounded-lg shadow-sm border border-gray-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Recruiter Dashboard
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={HeroImage}
                alt="Diverse professionals collaborating in modern office"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>

              {/* Floating card element */}
              <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <FiSearch className="text-blue-700 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">UX Designer</h4>
                    <p className="text-sm text-gray-500">Washington, Microsoft</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-medium">
                    $95k - $120k
                  </span>
                  <a
                    href="http://localhost:5173/apply-job/680bb7839f1dfc75766deffe"
                    className="text-xs bg-indigo-50 text-blue-700 px-3 py-1 rounded-full"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownload;
