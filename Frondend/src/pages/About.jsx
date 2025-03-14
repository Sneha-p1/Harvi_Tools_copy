import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../assets/images/about.jpg";
import Footer from "./Footer";
import Rotate from "./Rotate";
import ImageSlider from "./ImageSlider";

const About = () => {
  return (
    <div className="about-container bg-cover bg-center text-black min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black text-white flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-20 overflow-hidden min-h-screen">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center relative z-10">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl font-bold uppercase leading-snug tracking-wide">
              Delivering high-quality products tailored to <br />
              <span className="text-yellow-500">meet your specific needs.</span>
            </h1>
            <p className="mt-4 text-md text-gray-400">
              Engineered to exceed expectations, our solutions prioritize
              performance, reliability, and innovation. Each product is crafted
              with attention to detail, ensuring it aligns perfectly with your
              goals. Experience excellence designed to transform your vision
              into reality.
            </p>
          </motion.div>
        </div>

        {/* White Triangle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-0 right-0 bg-white w-full h-full hidden md:block"
          style={{ clipPath: "polygon(50% 100%, 100% 2.5%, 100% 100%)" }}
        />

        {/* Image Slider Inside Triangle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full flex justify-center md:justify-end md:ml-[35%] md:mt-[25%]"
        >
          <div className="w-full md:w-3/5 px-4 md:px-0">
            <ImageSlider />
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gray-100 p-4 md:p-8"
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl md:text-3xl font-bold leading-tight mt-2 text-center md:text-left">
            <span className="text-gray-500 font-medium">
              Learn more about HARVI TOOLS and what we do
            </span>
          </h1>

          {/* Image and Content Section */}
          <div className="relative mt-8 flex flex-col md:flex-row items-center">
            <img
              src={aboutimg}
              alt="Working Culture"
              className="w-full md:w-3/5 rounded-lg shadow-lg md:mr-6"
            />

            <div className="w-full md:w-2/5 bg-gray-900 text-white p-6 rounded-lg shadow-lg mt-6 md:mt-0">
              <h3 className="text-lg font-semibold">Our Stories</h3>
              <p className="text-sm mt-2 text-gray-300">
                At HARVI TOOLS, we specialize in creating high-quality plastic
                injection moulds and press tools. With a focus on precision
                and reliability, we provide customized solutions for various
                industries. Our advanced tools and skilled team ensure
                top-quality products that meet industry standards.
              </p>
            </div>
          </div>
        </div>
        <Rotate />
      </motion.div>

      {/* Who We Are Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 py-12 md:py-16 px-4 md:px-0"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-gray-800">Who</span> <span className="text-gray-600">We Are</span>
          </h2>
          <p className="mt-4 md:mt-6 text-md md:text-lg text-gray-700">
            At HARVI TOOLS, we specialize in the design and manufacturing of
            high-quality plastic injection moulds and press tools. With a proven
            track record of delivering precision-engineered products, we cater
            to a wide range of industries, ensuring customized solutions
            tailored to your specific needs.
          </p>
          <p className="mt-4 md:mt-6 text-md md:text-lg text-gray-700">
            Our advanced toolroom is equipped with cutting-edge technology,
            including EDM machines and a range of conventional machinery,
            enabling us to achieve unparalleled precision and quality.
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default About;