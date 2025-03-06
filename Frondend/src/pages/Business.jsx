
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import PlasticMould1 from "../assets/images/PlasticMould1.jpg";
import PlasticMould2 from "../assets/images/PlasticMould2.jpg";
import PressTool1 from "../assets/images/PressTool1.jpeg";
import PressTool2 from "../assets/images/PressTool2.jpg";
import LatheWork1 from "../assets/images/Lathe_Work.jpeg";
import facegrooving from "../assets/images/face-grooving.jpg";
import MillingworkImg from "../assets/images/Millingwork.jpg";
import BoringWorkImg from "../assets/images/BoringWork.jpg";

const Business = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-black py-12 px-6">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
        >
          Services
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-300">
          Explore the services and expertise offered by HARVI TOOLS
        </motion.p>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto">
        {/* Our Journey & Our Mission Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Our Journey Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-black rounded-xl shadow-2xl p-8 hover:shadow-3xl transition duration-300 border border-yellow-400/20"
          >
            <h2 className="text-3xl font-semibold mb-6 flex items-center text-yellow-400">
              Our Journey
            </h2>
            <p className="text-gray-300">
              Established in September 2019, <strong>HARVI TOOLS</strong> is
              dedicated to delivering high-quality tools for the home appliance
              and plastic industries. In a short period, we have earned trust
              from reputed multinational manufacturers by showcasing our
              commitment to excellence.
            </p>
          </motion.div>

          {/* Our Mission Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-yellow-100 rounded-xl shadow-2xl p-8 hover:shadow-3xl transition duration-300 border border-yellow-400/20"
          >
            <h2 className="text-3xl font-semibold mb-6 text-yellow-700">
              Our Mission
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-800">
                <FaCheckCircle className="mr-3 mt-1 text-yellow-600" />
                <div>
                  <strong>Highest Quality:</strong> Delivering top-notch
                  products that meet industry standards.
                </div>
              </li>
              <li className="flex items-start text-gray-800">
                <FaCheckCircle className="mr-3 mt-1 text-yellow-600" />
                <div>
                  <strong>Competitive Price:</strong> Providing value without
                  compromising quality.
                </div>
              </li>
              <li className="flex items-start text-gray-800">
                <FaCheckCircle className="mr-3 mt-1 text-yellow-600" />
                <div>
                  <strong>Shortest Lead Time:</strong> Ensuring timely delivery
                  to meet customer demands.
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Plastic Injection Mould Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
            <motion.img
              variants={imageHover}
              whileHover="hover"
              src={PlasticMould1}
              alt="Plastic Mould 1"
              className="rounded-lg shadow-lg h-[300px] w-full object-cover"
            />
            <motion.img
              variants={imageHover}
              whileHover="hover"
              src={PlasticMould2}
              alt="Plastic Mould 2"
              className="rounded-lg shadow-lg h-[300px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-black rounded-xl shadow-2xl p-8 hover:shadow-3xl transition duration-300 border border-yellow-400/20"
          >
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
              Plastic Injection Mould Making
            </h2>
            <p className="mb-6 text-gray-300">
              We specialize in creating precise and durable plastic injection
              moulds tailored to your requirements.
            </p>
          </motion.div>
        </motion.div>

        {/* Press Tools Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
            <motion.img
              variants={imageHover}
              whileHover="hover"
              src={PressTool1}
              alt="Press Tool 1"
              className="rounded-lg shadow-lg h-[300px] w-full object-cover"
            />
            <motion.img
              variants={imageHover}
              whileHover="hover"
              src={PressTool2}
              alt="Press Tool 2"
              className="rounded-lg shadow-lg h-[300px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-black rounded-xl shadow-2xl p-8 hover:shadow-3xl transition duration-300 border border-yellow-400/20"
          >
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
              Making Press Tools (Stamping)
            </h2>
            <p className="mb-6 text-gray-300">
              Our expertise extends to designing and manufacturing high-quality
              press tools for various stamping needs.
            </p>
          </motion.div>
        </motion.div>

        {/* Lathe Work Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
            <motion.img
              variants={imageHover}
              whileHover="hover"
              src={LatheWork1}
              alt="Blow Mould 1"
              className="rounded-lg shadow-lg h-[300px] w-full object-cover"
            />
            <motion.img
              variants={imageHover}
              whileHover="hover"
              src={facegrooving}
              alt="Blow Mould 2"
              className="rounded-lg shadow-lg h-[300px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-black rounded-xl shadow-2xl p-8 hover:shadow-3xl transition duration-300 border border-yellow-400/20"
          >
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
              Lathe Work
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Blow mould making</li>
              <li>Turning work</li>
              <li>Thread cutting</li>
              <li>Knurling work</li>
              <li>External grooving</li>
              <li>Face grooving</li>
              <li>Buffing</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Milling Work Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          {/* Image Section */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
            <motion.img
              variants={imageHover}
              whileHover="hover"
              src={MillingworkImg}
              alt="Milling Work 1"
              className="rounded-lg shadow-lg h-[300px] w-full object-cover"
            />
            <motion.img
              variants={imageHover}
              whileHover="hover"
              src={BoringWorkImg}
              alt="Milling Work 2"
              className="rounded-lg shadow-lg h-[300px] w-full object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-black rounded-xl shadow-2xl p-8 hover:shadow-3xl transition duration-300 border border-yellow-400/20"
          >
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
              Milling Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Drilling</li>
                <li>Tapping</li>
                <li>Boring</li>
                <li>Jig boring</li>
                <li>Template jig</li>
                <li>Plate type jig</li>
                <li>Open type jig</li>
                <li>Channel jig</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Leaf jig</li>
                <li>Box type jig</li>
                <li>Adjustable fixture</li>
                <li>Grinding fixture</li>
                <li>Welding fixture</li>
                <li>Assembly fixture</li>
                <li>Inspection fixture</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <p className="text-xl mb-4 text-gray-300">
            Partner with HARVI TOOLS for innovative and reliable solutions in
            the field of precision engineering.
          </p>
          <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Contact us to learn more and start your journey toward precision and
            quality.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Business;