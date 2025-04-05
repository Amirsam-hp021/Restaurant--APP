import React from "react";
import { Link } from "react-router-dom";
import "../css/HeroSection.css"; // ✅ import external CSS

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Lime Lounge</h1>
        <p>Authentic Persian flavors served with elegance and tradition.</p>
        <Link to="/menu">Explore Our Menu</Link>
      </div>
    </div>
  );
};

export default HeroSection;
