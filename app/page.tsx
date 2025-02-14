"use client";

import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center">
      {!showWelcome ? (
        <ParticlesBackground onBlackholeComplete={() => setShowWelcome(true)} />
      ) : (
        <div className="flex justify-center items-center h-screen fade-in">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
            Welcome to Samsung Galaxy
          </h1>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
    </div>
  );
}
