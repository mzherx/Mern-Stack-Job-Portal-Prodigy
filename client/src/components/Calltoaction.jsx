import React from "react";
import calltoaction from "../assets/calltoaction.jpg";
import { motion } from "framer-motion";

const Calltoaction = () => {
  return (
    <div>
      <section>
        <div
          className="container relative items-center w-full px-7 py-12 mx-auto md:px-12 lg:px-12 max-w-[96%] md:max-w-9xl lg:py-[7rem] bg-primary border-textBgLight border-[1px] border-solid box-border rounded-3xl mt-[8rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${calltoaction})` }}
        >
          {/* Overlay for semi-transparent background */}
          <div className="absolute inset-0 bg-primary opacity-90 rounded-3xl"></div>

          {/* Content */}
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
            <div className="relative flex w-full mx-auto text-left">
              <div className="relative inline-flex items-center mx-auto align-middle">
                <div className="text-center">
                  <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-4xl lg:text-5xl lg:max-w-7xl font-primary">
                    Let’s get Connected and start{" "}
                    <br className="hidden lg:block" />
                    Finding Your Dream Job
                  </h1>
                  <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-[#d1d0d0]">
                    Your Career, Your Future – Simplified.
                  </p>
                  <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                    <div className="mt-3 rounded-lg sm:mt-0">
                      <button
                        onClick={() => (window.location.href = "/")}
                        className="px-8 py-4 text-base font-semibold text-center text-white transition duration-500 ease-in-out transform bg-secondary lg:px-14 rounded-xl hover:bg-[#3a3a3a] font-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Search
                      </button>
                    </div>
                    <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                      <button
                        onClick={() => (window.location.href = "/")}
                        className="items-center block px-5 lg:px-10 py-3.5 text-base font-semibold font-primary text-center text-[#ffffff] transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-[#3a3a3a] hover:border-[#3a3a3a]"
                      >
                        See features
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Calltoaction;
