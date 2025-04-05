import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import MenuHighlights from "../components/MenuHighlights";
import WhyChooseUs from "../components/WhyChooseUs";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <HeroSection />

      {/* About / Real Info Section */}
      <section className="section">
        <h2 className="section-title">About Lime Lounge</h2>
        <p className="section-text">
          <strong>Lime Lounge</strong> is a cozy and modern Persian café located
          in the heart of Yerevan — Komitas 20.
          <br />
          <br />
          We serve 100% authentic Iranian fast food, including{" "}
          <strong>Iranian-style pizzas</strong>, <strong>juicy burgers</strong>,
          and more — all made with care and tradition.
          <br />
          <br />
          🛵 We also offer <strong>free delivery</strong> around the Komitas
          area.
          <br />
          🕒 Open every day from <strong>11:00 AM to 11:00 PM</strong> — come
          taste the best of Persian street food!
        </p>
        <Link to="/menu" className="section-btn">
          See Full Menu
        </Link>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Featured Menu */}
      <MenuHighlights />

      {/* Call-to-Action */}
      <section className="section section-dark">
        <h2 className="section-title">Ready to Order?</h2>
        <p className="section-text">
          Enjoy great food — delivered fast and fresh. Place your order now and
          experience the flavor of Lime Lounge!
        </p>
        <Link to="/order" className="section-btn">
          Order Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
