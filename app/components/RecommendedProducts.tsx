"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RecommendedProducts() {
  type SelectedOptions = {
    [key: number]: {
      color?: string;
      storage?: string;
    };
  };

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});

  const recommendedItems = [
    {
      id: 1,
      name: "Galaxy S25 Ultra",
      price: "₹1,41,999",
      image: "/s25-ultra-rmbg.png",
      colors: ["#BCC5D3", "#4A4A4A", "#D4AF37"], // Silver, Black, Gold
      storage: ["256 GB", "512 GB", "1 TB"],
    },
    {
      id: 2,
      name: "Galaxy A35 5G",
      price: "₹23,499",
      image: "/a35.png",
      colors: ["#1E3A8A", "#000000"], // Blue, Black
      storage: ["128 GB"],
    },
    {
      id: 3,
      name: "Galaxy Tab A9+ 5G",
      price: "₹22,999",
      image: "/tab.png",
      colors: ["#808080", "#000000"], // Gray, Black
      storage: ["128 GB"],
    },
    {
      id: 4,
      name: "Galaxy Buds3 Pro",
      price: "₹19,999",
      image: "/buds.png",
      colors: ["#C0C0C0", "#000000"], // Silver, Black
    },
  ];

  const handleSelect = (id: number, type: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: value,
      },
    }));
  };

  return (
    <div className="relative w-full min-h-screen md:min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center py-10 px-6 justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-4xl md:text-6xl font-semibold tracking-wide drop-shadow-2xl text-center"
      >
		What Our Customers Love
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {recommendedItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition-transform duration-200 relative overflow-hidden"
          >
            <img src={item.image} alt={item.name} className="w-40 h-40 object-contain mb-4" />
            <h3 className="text-white text-xl font-bold">{item.name}</h3>
            <p className="text-blue-400 text-lg font-semibold">{item.price}</p>

            {/* Color Options */}
            {item.colors && (
              <div className="flex gap-2 mt-2">
                {item.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(item.id, "color", color)}
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedOptions[item.id]?.color === color
                        ? "border-white scale-110"
                        : "border-gray-500"
                    } transition-all duration-200`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}

            {/* Storage Options */}
            {item.storage && (
              <div className="flex gap-2 mt-2">
                {item.storage.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(item.id, "storage", size)}
                    className={`px-2 py-1 text-sm ${
                      selectedOptions[item.id]?.storage === size
                        ? "text-white bg-blue-600"
                        : "text-gray-300 border border-gray-500"
                    } rounded-md transition-all duration-200`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}

            {/* Buy Now Button */}
            <button className="mt-4 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600">
              Buy Now
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
