"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Home() {
  return (
	<div className="bg-gradient-to-b from-black via-gray-900 to-black">
	<motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=" top-0 left-0 w-full z-50"
      >
        <Navbar />
      </motion.div>
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center h-screen text-center space-y-8 px-6"
      >
        <motion.video 
          id="samsung-video"
          src="/animate.webm" 
          autoPlay 
          muted 
          className="w-full max-w-5xl mb-6 rounded-xl shadow-2xl border-2 border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-2xl"
        >
          Welcome to <span className="text-blue-400">Samsung Galaxy</span>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300 text-lg md:text-2xl font-light tracking-wide max-w-3xl leading-relaxed"
        >
          Experience the future of innovation with <span className="text-blue-300 font-medium">cutting-edge technology</span> and breathtaking design.
        </motion.div>
      </motion.div>
    </div>
	</div>
  );
}
