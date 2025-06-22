import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black pt-20 ">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-40 h-40 rounded-full bg-blue-400 opacity-5 blur-2xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="relative rounded-3xl bg-gradient-to-r from-blue-900/90 to-indigo-900/90 p-1"
          >
            <div className="backdrop-blur-sm rounded-2xl bg-black/30 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                    Join the Prodigy Community
                  </h2>
                  <p className="text-lg text-gray-300 font-light max-w-2xl">
                    Stay ahead with the latest job opportunities, career insights, and exclusive resources delivered straight to your inbox.
                  </p>
                </div>
                
                <div className="lg:col-span-5">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md p-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/30 px-6 py-4 text-white placeholder-gray-400 rounded-lg focus:outline-none"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-xl font-medium text-white ${
                        submitted
                          ? "bg-green-600"
                          : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500"
                      } transition-all duration-300 shadow-lg shadow-blue-900/30`}
                    >
                      {submitted ? "Subscribed!" : "Subscribe Now"}
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="border-t border-gray-800 pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* Column 1 */}
            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Prodigy</h3>
                </div>
                <p className="mt-4 text-gray-400">The future of professional networking and career development.</p>
              </div>
              
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="bg-gray-800 p-1 mr-3 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="bg-gray-800 p-1 mr-3 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </span>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="bg-gray-800 p-1 mr-3 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </span>
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="bg-gray-800 p-1 mr-3 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </span>
                    Features
                  </a>
                </li>
              </ul>
            </motion.div>
            
            {/* Column 2 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-gray-800">Job Seekers</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Job Listings
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Career Guidance
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Skill Development
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Interview Prep
                  </a>
                </li>
              </ul>
            </motion.div>
            
            {/* Column 3 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-gray-800">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Quick Start
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    User Guide
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Blog
                  </a>
                </li>
              </ul>
            </motion.div>
            
            {/* Column 4 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-gray-800">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    License Info
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="text-blue-500 mr-2">→</span>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Social Media Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 border-t border-gray-800 pt-10"
        >
          <div className="flex space-x-4">
            <a href="https://x.com/mzher_x" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group hover:bg-blue-600 transition-all duration-300">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mzhrx/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group hover:bg-blue-600 transition-all duration-300">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
              </svg>
            </a>
            <a href="https://github.com/mzherx" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group hover:bg-blue-600 transition-all duration-300">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://instagram.com/mzherx" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group hover:bg-blue-600 transition-all duration-300">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="pt-8 mt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold text-xl">Prodigy</span>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2025 Prodigy. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/" className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-300">Privacy</a>
            <a href="/" className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-300">Terms</a>
            <a href="/" className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-300">Sitemap</a>
          </div>
        </motion.div>
      </div>
      
      {/* Animated gradient line */}
      <div className="mt-10 h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 background-animate"></div>
      
      {/* Add this to your global CSS */}
      <style jsx>{`
        .background-animate {
          background-size: 200%;
          animation: gradient 8s ease infinite;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;