import React, { useContext, useEffect, useState } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Zap, Briefcase } from "lucide-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer div to prevent content jump when navbar becomes fixed */}
      <div className="h-2"></div>
      
      <div className={`${scrolled ? "fixed animate-slideDown" : "relative"} top-0 left-0 right-0 z-20 w-full transition-all duration-300`}>
        <nav className={`transition-all duration-500 ${
          scrolled 
            ? "mx-4 my-3 max-w-6xl md:mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100/50 py-4 px-6" 
            : " mx-8 rounded-xl bg-white shadow-sm border-b border-gray-100 py-6 px-8"
        } flex justify-between items-center`}>
          {/* New Logo */}
          <div 
            onClick={() => navigate("/")} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className={`bg-gradient-to-br from-blue-600 to-indigo-800 p-2 rounded-lg ${scrolled ? 'shadow-lg' : ''} group-hover:shadow-blue-500/30 transition-all duration-300`}>
              <Zap size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Prodigy
            </span>
          </div>

          {/* User section with premium styling */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link 
                  to="/applications" 
                  className="hidden md:flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  <Briefcase size={18} />
                  <span className="font-medium">My Jobs</span>
                </Link>
                <div className="flex items-center gap-3">
                  <div className="hidden md:block">
                    <span className="text-sm font-medium text-gray-600">
                      Hi, {user.firstName}
                    </span>
                  </div>
                  <UserButton 
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "h-10 w-10 border-2 border-blue-100 shadow-md",
                        userButtonPopoverCard: "shadow-2xl rounded-xl border border-gray-100",
                        userButtonTrigger: "focus:ring-2 focus:ring-blue-200"
                      }
                    }} 
                  />
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={(e) => setShowRecruiterLogin(true)}
                  className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  Recruiter Portal
                </button>
                <button
                  onClick={(e) => openSignIn()}
                  className={`bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 py-2.5 rounded-xl font-medium text-sm ${scrolled ? 'shadow-lg hover:shadow-blue-500/30' : 'hover:shadow-md'} transition-all duration-300`}
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </nav>
      </div>

      {/* Add this to your tailwind.config.js or CSS file */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;