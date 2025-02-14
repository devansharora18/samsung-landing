"use client";

import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center">
      {showWelcome && (
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
      )}
      {!showWelcome ? (
        <ParticlesBackground onLoadingComplete={() => setShowWelcome(true)} />
      ) : (
        <div className="flex flex-col justify-center items-center h-screen fade-in">
          <div className="text-white text-4xl md:text-6xl font-bold tracking-wide">
            Welcome to Samsung Galaxy
          </div>
		  <div className="text-white text-2xl md:text-4xl font-bold tracking-wide">
			Into the Future
		  </div>
        </div>
      )}
    </div>
  );
}
