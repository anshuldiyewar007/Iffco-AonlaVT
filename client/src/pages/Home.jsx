import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import leavesImage from "../assets/leaves.jpg";
import iffcoLogo from "../assets/logo.jpg";

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-green-100 via-green-50 to-green-100">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src={leavesImage}
          alt="IFFCO Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 via-green-800/85 to-green-700/80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <motion.img
            src={iffcoLogo}
            alt="IFFCO Logo"
            className="w-[10rem] h-[7rem] md:w-[15rem] md:h-[10rem] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          {/* Tagline */}
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg"
          >
            For the Farmers • By the Farmers • To the Farmers
          </motion.h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-extrabold text-white text-center drop-shadow-lg"
          >
            Welcome to IFFCO Aonla VT Process Portal
          </motion.h2>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            {!isLoggedIn && (
              <NavLink to="/register">
                <button className="px-8 py-3 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-100 transition-colors duration-300 shadow-lg">
                  Apply Now
                </button>
              </NavLink>
            )}
            <NavLink to="/about">
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 shadow-lg">
                Learn More
              </button>
            </NavLink>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="px-6 md:px-12">
        <div className="container mx-auto max-w-4xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-gray-800 italic leading-relaxed text-center">
              "To enable Indian farmers to prosper through timely supply of
              reliable, high-quality agricultural inputs and services in an
              environmentally sustainable manner and to undertake other
              activities to improve their welfare."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-gradient-to-b from-green-100/60 via-green-50/40 to-green-100/60">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-green-800 mb-12">Key Objectives</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 px-6 md:px-12">
            {[
              "Provide high-quality fertilisers in the right time and adequate quantities.",
              "Commitment to health, safety, environment, and forestry development.",
              "Foster a culture of trust, openness, and mutual concern.",
              "Make plants energy efficient and conserve energy.",
            ].map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-200"
              >
                <p className="text-xl text-gray-800 leading-relaxed">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-12">
            Awards & Accolades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
            {[
              "SARVASHRESHTHA SURAKSHA PURASKAR 2018-19",
              "CII ENERGY EFFICIENT AWARD FOR AONLA-I",
              "GREENTECH ENV GOLD AWARD 2018-2019",
              "8TH INSAAN MEET",
              "MOST INNOVATIVE ENVIRONMENTAL PROJECT AWARD 2017-2018",
              "FAI SAFETY AWARD 2017-2018",
              "GREENTECH ENV GOLD AWARD 2017-2018",
              "SAFETY INNOVATION AWARD 2017-2018",
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-8 border border-green-200 rounded-xl shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-lg md:text-xl text-green-800 font-semibold text-center">
                  {award}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;