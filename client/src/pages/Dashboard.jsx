import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import logo from "../assets/newlogo.svg";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("");

  const { companyData, setCompanyData, setCompanyToken } = useContext(AppContext);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Set active tab based on location
  useEffect(() => {
    const path = location.pathname.split("/").pop();
    setActiveTab(path);
  }, [location]);

  // Function to logout for company
  const logout = () => {
    setCompanyToken(null);
    localStorage.removeItem("companyToken");
    setCompanyData(null);
    navigate("/");
  };

  useEffect(() => {
    if (companyData) {
      navigate("/dashboard/manage-job");
    }
  }, [companyData]);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white shadow-xl overflow-hidden flex flex-col"
          >
            {/* Logo Section */}
            <div className="p-6 flex justify-between items-center">
              <img
                onClick={() => navigate("/")}
                className="h-8 w-auto cursor-pointer"
                src={logo}
                alt="Logo"
              />
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden text-white/70 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Section */}
            <div className="mt-8 px-4 flex-1">
              <div className="space-y-1">
                <NavLink 
                  to="/dashboard/add-job"
                  className={({ isActive }) => `
                    group flex items-center px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200
                    ${isActive 
                      ? "bg-white text-indigo-800 shadow-lg" 
                      : "text-white/80 hover:bg-white/10"}
                  `}
                >
                  <div className={`
                    mr-3 p-2 rounded-lg transition-all duration-200
                    ${activeTab === 'add-job' 
                      ? "bg-indigo-100 text-indigo-800" 
                      : "bg-indigo-700/50 text-white/90 group-hover:bg-indigo-700"}
                  `}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Add Job
                </NavLink>

                <NavLink 
                  to="/dashboard/manage-job"
                  className={({ isActive }) => `
                    group flex items-center px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200
                    ${isActive 
                      ? "bg-white text-indigo-800 shadow-lg" 
                      : "text-white/80 hover:bg-white/10"}
                  `}
                >
                  <div className={`
                    mr-3 p-2 rounded-lg transition-all duration-200
                    ${activeTab === 'manage-job' 
                      ? "bg-indigo-100 text-indigo-800" 
                      : "bg-indigo-700/50 text-white/90 group-hover:bg-indigo-700"}
                  `}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  Manage Jobs
                </NavLink>

                <NavLink 
                  to="/dashboard/view-applications"
                  className={({ isActive }) => `
                    group flex items-center px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200
                    ${isActive 
                      ? "bg-white text-indigo-800 shadow-lg" 
                      : "text-white/80 hover:bg-white/10"}
                  `}
                >
                  <div className={`
                    mr-3 p-2 rounded-lg transition-all duration-200
                    ${activeTab === 'view-applications' 
                      ? "bg-indigo-100 text-indigo-800" 
                      : "bg-indigo-700/50 text-white/90 group-hover:bg-indigo-700"}
                  `}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  View Applications
                </NavLink>
              </div>
            </div>

            {/* Status Card */}
            <div className="m-4 p-4 bg-gradient-to-r from-indigo-700 to-indigo-600 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-medium text-white/90">Account Status</h3>
                <span className="flex items-center text-xs font-medium text-emerald-300">
                  <span className="w-2 h-2 mr-1 bg-emerald-400 rounded-full animate-pulse"></span>
                  Active
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center ring-2 ring-indigo-300 ring-offset-1 ring-offset-indigo-700">
                  {companyData?.image ? (
                    <img 
                      src={companyData.image} 
                      alt="Profile" 
                      className="w-11 h-11 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-xl font-semibold text-white">
                      {companyData?.name?.charAt(0) || "C"}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">
                    {companyData?.name || "Company"}
                  </h4>
                  <p className="text-xs text-indigo-200">Recruiter Account</p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <div className="ml-6">
                <h1 className="text-xl font-semibold text-gray-800">
                  {activeTab === 'add-job' && 'Add New Job'}
                  {activeTab === 'manage-job' && 'Manage Jobs'}
                  {activeTab === 'view-applications' && 'View Applications'}
                </h1>
                <p className="text-sm text-gray-500">{currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center border-r pr-4 border-gray-200">
                <span className="text-sm font-medium text-gray-700">{formatTime(currentTime)}</span>
              </div>

              {companyData && (
                <div className="relative">
                  <button 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-3 focus:outline-none"
                  >
                    <div>
                      <p className="text-right text-sm font-medium text-gray-700">{getGreeting()},</p>
                      <p className="text-right text-xs text-gray-500">{companyData.name}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-indigo-100 border border-gray-200 ring-2 ring-white flex items-center justify-center overflow-hidden">
                      {companyData.image ? (
                        <img 
                          src={companyData.image} 
                          alt={companyData.name} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-indigo-800 font-semibold">{companyData.name.charAt(0)}</span>
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      >
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">{companyData.name}</p>
                          <p className="text-xs text-gray-500 truncate">Company Dashboard</p>
                        </div>
                        <div className="py-1">
                          <button
                            onClick={logout}
                            className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Sign out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;