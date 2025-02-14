import React from "react";
import { assets } from "../assets/assets";
import Bgimage from "../assets/image-gall.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AppDownload = () => {
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
      <section className="overflow-hidden bg-white py-8 sm:py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-[100px] ">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-40">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-[16px] font-semibold leading-7 text-primary">
                  Find faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-[#252525] sm:text-5xl font-primary ">
                  Millions of Jobs. Find the one that suits you.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 600,000
                  companies worldwide.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      >
                        <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                        <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                        <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                      </svg>
                    </dt>
                    <dd className="inline">Access Millions of Opportunities</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </dt>
                    <dd className="inline">
                      Get Your Personalized Salary Estimate
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </dt>
                    <dd className="inline">
                      Discover Company Insights & Reviews
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/"
                  className="rounded-md bg-primary   px-8 py-4 text-md font-primary font-semibold text-white shadow-sm hover:bg-slate-600 transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Find Jobs
                </a>
                <Link
                  to="/recruiter-login"
                  className="text-sm font-semibold leading-6 text-gray-700"
                >
                  Recruiter Dashboard
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <img
              src={Bgimage}
              alt="Product screenshot"
              className="h-full w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 border-[#BEBEBE] object-cover lg:h-auto"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AppDownload;
