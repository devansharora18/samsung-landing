"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Shop() {
  const [activeTab, setActiveTab] = useState("Mobile");
  const [price, setPrice] = useState(0);

  const tabs = ["Mobile", "Ecosystem"];

  const mobileItems = [
    { id: 1, name: "Galaxy S25 Ultra", price: "₹1,29,999", image: "/s25-ultra-rmbg.png" },
    { id: 2, name: "Galaxy Z Fold6", price: "₹1,49,999", image: "/fold.png" },
    { id: 3, name: "Galaxy S24", price: "₹54,999", image: "/s24.png" },
    { id: 4, name: "Galaxy A35 5G", price: "₹24,999", image: "/a35.png" },
  ];

  const ecosystem = [
    { id: 1, name: "Galaxy Book", price: "₹62,999", image: "/book.png" },
    { id: 2, name: "Galaxy Tab", price: "₹19,999", image: "/tab.png" },
    { id: 3, name: "Galaxy Buds", price: "₹13,499", image: "/buds.png" },
  ];

  return (
    <div className="relative w-full min-h-screen md:h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center py-10 px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-4xl md:text-6xl font-semibold tracking-wide drop-shadow-2xl text-center"
      >
        Invest in the Future of Innovation
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex space-x-6 mt-6 border-b border-gray-700"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg md:text-xl font-medium transition-all duration-300 ${
              activeTab === tab ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {(activeTab === "Mobile" ? mobileItems : ecosystem).map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.15 }}
            className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition-transform duration-200 relative overflow-hidden group"
          >
            <img src={item.image} alt={item.name} className="w-40 h-40 object-contain mb-4" />
            <h3 className="text-white text-xl font-bold">{item.name}</h3>
            <p className="text-blue-400 text-lg font-semibold">{item.price}</p>

        
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
