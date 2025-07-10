import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  const [phase, setPhase] = useState("initial");

  useEffect(() => {
    const expandTimeout = setTimeout(() => setPhase("expanded"), 2000);
    const fadeTimeout = setTimeout(() => setPhase("fade"), 5000);
    return () => {
      clearTimeout(expandTimeout);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <div className={`splash-screen ${phase === "fade" ? "fade-out" : ""}`}>
      <div className={`name-expand-row ${phase}`}>
        <span className="name-segment">
          <span className="short">M</span>
          <span className="full">OHAMMED</span>
        </span>
        <span className="name-segment">
          <span className="short">A</span>
          <span className="full">BDUL</span>
        </span>
        <span className="name-segment">
          <span className="short">G</span>
          <span className="full">HAFFAR</span>
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;
