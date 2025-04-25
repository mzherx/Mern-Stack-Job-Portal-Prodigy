import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, X, Upload, Github, Linkedin } from "lucide-react";

const RecruiterLogin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const dragAreaRef = useRef(null);

  const { setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } =
    useContext(AppContext);

  const checkPasswordStrength = (pass) => {
    let score = 0;
    if (!pass) return score;
    if (pass.length > 6) score += 1;
    if (pass.length > 10) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (dragAreaRef.current) {
      dragAreaRef.current.classList.add("border-blue-500", "bg-blue-50");
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (dragAreaRef.current) {
      dragAreaRef.current.classList.remove("border-blue-500", "bg-blue-50");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (dragAreaRef.current) {
      dragAreaRef.current.classList.remove("border-blue-500", "bg-blue-50");
    }
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      toast.error("Please upload an image file");
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    if (state === "Sign Up" && !isTextDataSubmited) {
      if (passwordStrength < 3) {
        toast.warning("Please use a stronger password for better security");
        return;
      }
      return setIsTextDataSubmited(true);
    }

    setIsLoading(true);

    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/company/login", {
          email,
          password,
        });

        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          toast.success("Login successful! Redirecting to dashboard...");
          setTimeout(() => {
            setShowRecruiterLogin(false);
            navigate("/dashboard");
          }, 1000);
        } else {
          toast.error(data.message || "Login failed. Please check your credentials.");
        }
      } else {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("password", password);
        formData.append("email", email);
        if (image) {
          formData.append("image", image);
        }

        const { data } = await axios.post(
          backendUrl + "/api/company/register",
          formData
        );
        
        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          toast.success("Account created successfully! Welcome aboard!");
          setTimeout(() => {
            setShowRecruiterLogin(false);
            navigate("/dashboard");
          }, 1000);
        } else {
          toast.error(data.message || "Registration failed. Please try again.");
        }
      }
    } catch (error) {
      toast.error(error.message || "An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setImage(null);
    setIsTextDataSubmited(false);
    setPasswordStrength(0);
  };

  const switchMode = (newState) => {
    setState(newState);
    resetForm();
  };

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 350, damping: 25 } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95, 
      transition: { duration: 0.2 } 
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.3 } 
    },
    exit: { 
      opacity: 0, 
      x: 20, 
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial="hidden"
      animate="visible"
      variants={overlayVariants}
    >
      <motion.div 
        className="relative w-full max-w-md"
        variants={modalVariants}
      >
        <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl">
          
          {/* Glass effect top area */}
          <div className="relative h-32 bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
            {/* Blurred circles for decoration */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-blue-400 opacity-20 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-indigo-300 opacity-20 blur-xl"></div>
            
            {/* Floating avatar container */}
            <div className="absolute -bottom-12 flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg p-1">
              <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full">
                <User size={36} className="text-white" />
              </div>
            </div>
          </div>

          {/* Header text */}
          <div className="px-8 pt-16 pb-4">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-1">
              {state === "Login" ? "Welcome Back" : 
               isTextDataSubmited ? "Add Your Brand" : "Join Our Platform"}
            </h1>
            <p className="text-sm text-center text-gray-500">
              {state === "Login" 
                ? "Access your recruiter dashboard" 
                : isTextDataSubmited 
                  ? "Upload your company logo to complete setup" 
                  : "Create an account to find top talent"
              }
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.form 
              key={`${state}-${isTextDataSubmited}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              onSubmit={onSubmitHandler}
              className="px-8 pb-6 space-y-4"
            >
              {state === "Sign Up" && isTextDataSubmited ? (
                <div className="flex flex-col items-center my-6">
                  <div 
                    ref={dragAreaRef}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className="relative w-40 h-40 mb-4 overflow-hidden rounded-full border-2 border-dashed border-gray-300 transition-all duration-300 group cursor-pointer hover:border-blue-400 bg-gray-50 flex items-center justify-center"
                  >
                    {image ? (
                      <div className="relative w-full h-full">
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Company Logo Preview"
                          className="object-cover w-full h-full"
                        />
                        <div 
                          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity group-hover:opacity-100"
                          onClick={() => setImage(null)}
                        >
                          <X size={20} className="text-white" />
                          <span className="text-xs font-medium text-white mt-1">Remove</span>
                        </div>
                      </div>
                    ) : (
                      <label htmlFor="logo-upload" className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                        <div className="p-4 rounded-full bg-blue-50 text-blue-500 mb-3">
                          <Upload size={28} />
                        </div>
                        <span className="text-sm font-medium text-blue-600">Upload logo</span>
                        <span className="text-xs text-gray-500 mt-1">Click or drag & drop</span>
                        <input
                          id="logo-upload"
                          type="file"
                          accept="image/*"
                          onChange={(e) => e.target.files[0] && setImage(e.target.files[0])}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {state !== "Login" && (
                    <div className="space-y-1.5">
                      <label htmlFor="company-name" className="text-sm font-medium text-gray-700 ml-1 flex items-center gap-1.5">
                        <User size={14} className="text-gray-500" />
                        Company Name
                      </label>
                      <input
                        id="company-name"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter your company name"
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1 flex items-center gap-1.5">
                      <Mail size={14} className="text-gray-500" />
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700 ml-1 flex items-center gap-1.5">
                      <Lock size={14} className="text-gray-500" />
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        value={password}
                        onChange={handlePasswordChange}
                        type={showPassword ? "text" : "password"}
                        placeholder={state === "Login" ? "Enter your password" : "Create a strong password"}
                        required
                      />
                      <button 
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    
                    {/* Password strength indicator (only for signup) */}
                    {state === "Sign Up" && password && (
                      <div className="mt-2">
                        <div className="flex items-center gap-1 h-1.5">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div 
                              key={level}
                              className={`h-full rounded-full flex-1 transition-all ${
                                passwordStrength >= level 
                                  ? passwordStrength <= 2 
                                    ? "bg-red-400" 
                                    : passwordStrength <= 3 
                                      ? "bg-yellow-400" 
                                      : "bg-green-400"
                                  : "bg-gray-200"
                              }`}
                            ></div>
                          ))}
                        </div>
                        <p className="text-xs mt-1 text-gray-500">
                          {passwordStrength === 0 && "Enter a password"}
                          {passwordStrength === 1 && "Password is too weak"}
                          {passwordStrength === 2 && "Password is weak"}
                          {passwordStrength === 3 && "Password is good"}
                          {passwordStrength === 4 && "Password is strong"}
                          {passwordStrength === 5 && "Password is very strong"}
                        </p>
                      </div>
                    )}
                  </div>
                </>
              )}

              {state === "Login" && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full py-3.5 mt-4 font-medium text-white transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : state === "Login" ? (
                  "Sign In"
                ) : isTextDataSubmited ? (
                  "Create Account"
                ) : (
                  "Continue"
                )}
              </button>

              {/* Social login options */}
              {state === "Login" && (
                <div className="mt-5">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-3 text-gray-500 bg-white">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mt-5">
                    <button
                      type="button"
                      className="flex justify-center items-center py-2.5 border border-gray-200 rounded-xl shadow-sm bg-white hover:bg-gray-50 transition-colors text-gray-600"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path fill="currentColor" d="M12 11v2h5.5c-.2 1.1-1.5 3.5-5.5 3.5-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.4-2.4C16.4 2 14.4 1 12 1 6.5 1 2 5.5 2 11s4.5 10 10 10c5.8 0 9.6-4.1 9.6-9.8 0-.7-.1-1.2-.2-1.7H12z"/>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex justify-center items-center py-2.5 border border-gray-200 rounded-xl shadow-sm bg-white hover:bg-gray-50 transition-colors text-gray-600"
                    >
                      <Linkedin size={20} />
                    </button>
                    <button
                      type="button"
                      className="flex justify-center items-center py-2.5 border border-gray-200 rounded-xl shadow-sm bg-white hover:bg-gray-50 transition-colors text-gray-600"
                    >
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              )}
            </motion.form>
          </AnimatePresence>

          {/* Account toggle */}
          <div className="py-5 bg-gray-50 border-t border-gray-100 rounded-b-3xl">
            <div className="flex justify-center px-8">
              <p className="text-sm text-gray-600">
                {state === "Login" ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => switchMode(state === "Login" ? "Sign Up" : "Login")}
                  className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {state === "Login" ? "Sign up now" : "Sign in"}
                </button>
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={() => setShowRecruiterLogin(false)}
            className="absolute top-4 right-4 p-2 text-white/80 transition-colors rounded-full hover:bg-white/20 hover:text-white focus:outline-none"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RecruiterLogin;