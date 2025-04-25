import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiStar } from "react-icons/fi";
import CtaBackground from "../assets/calltoaction.jpg";

const CallToAction = () => {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={CtaBackground}
          alt="Professional team collaborating"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-800/90"></div>
      </div>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 rounded-3xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          {/* Main content */}
          <div className="relative text-center">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">Let's Get Connected</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
                Find Your Dream Job
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto mt-6 text-lg text-blue-100"
            >
              Your Career, Your Future — Simplified with Smart Matching Technology
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col justify-center gap-4 mt-10 sm:flex-row sm:gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                <FiSearch className="w-5 h-5 mr-2" />
                Search Jobs
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 bg-transparent border-2 border-white rounded-xl hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <FiStar className="w-5 h-5 mr-2" />
                Explore Features
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-sm text-blue-200"
            >
              Trusted by over 1M+ professionals worldwide
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;