import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const RecruiterLogin = () => {
  const navigate = useNavigate();

  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);

  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  const { setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } =
    useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state === "Sign Up" && !isTextDataSubmited) {
      return setIsTextDataSubmited(true);
    }

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
          setShowRecruiterLogin(false);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      } else {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("image", image);

        const { data } = await axios.post(
          backendUrl + "/api/company/register",
          formData
        );
        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem("companyToken", data.token);
          setShowRecruiterLogin(false);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 sm:p-[50px] rounded-xl text-slate-500"
      >
        <h1 className="text-center text-3xl sm:text-4xl text-neutral-700 font-semibold font-primary mb-1 ">
          Recruiter {state}
        </h1>
        <p className="text-sm sm:text-[11px] text-center">
          Welcome Back! Please sign in to continue
        </p>

        {state === "Sign Up" && isTextDataSubmited ? (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="w-16 rounded-full"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
              <p>
                Upload Company <br /> logo
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="group border pl-4 pr-[70px] py-3 flex items-center justify-start gap-2 rounded-[10px] mt-5 transition duration-300 ease-in-out focus-within:border-primary w-full">
                <img src={assets.person_icon} alt="" className="shrink-0 pl-2" />
                <input
                  className="outline-none text-sm p-2 flex-1 w-auto"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}

            {/* Email Input */}
            <div className="group border pl-4 pr-[70px] py-3 flex items-center justify-start gap-2 rounded-[10px] mt-5 transition duration-300 ease-in-out focus-within:border-primary w-full">
              <img src={assets.email_icon} alt="" className="shrink-0 pl-2" />
              <input
                className="outline-none text-sm p-3 flex-1 w-auto"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="group border pl-4 pr-[70px] py-3 flex items-center justify-start gap-2 rounded-[10px] mt-5 transition duration-300 ease-in-out focus-within:border-primary w-full">
              <img src={assets.location_icon} alt="" className="shrink-0 pl-2" />
              <input
                className="outline-none text-sm p-2 flex-1 w-auto"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </>
        )}

        {state === "Login" && (
          <p className="text-md text-[#5a70ec] mt-4 cursor-pointer font-primary ">
            Forget password?
          </p>
        )}
        <button
          type="submit"
          className="bg-primary w-full text-white py-3 rounded-xl mt-4 text-bold font-primary text-[18px] hover:bg-slate-600 transition duration-300 ease-in-out"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmited
            ? "Create Account"
            : "Next"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center font-primary ">
            Don't have an account?{" "}
            <span
              className="text-primary cursor-pointer hover:text-slate-600 transition duration-300 ease-in-out"
              onClick={() => setState("Sign Up")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center hover:text-slate-600 transition duration-300 ease-in-out">
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={(e) => setShowRecruiterLogin(false)}
          className="absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
    
  );
};

export default RecruiterLogin;
