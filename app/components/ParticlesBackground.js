"use client";

import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";

const ParticlesBackground = ({ onLoadingComplete }) => {
  const [isBlack, setIsBlack] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlack(true);
      setTimeout(() => onLoadingComplete(), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="absolute inset-0">
      {!isBlack ? (
        <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
      ) : (
        <div className="absolute inset-0 bg-black transition-opacity duration-1000"></div>
      )}
    </div>
  );
};

export default ParticlesBackground;
