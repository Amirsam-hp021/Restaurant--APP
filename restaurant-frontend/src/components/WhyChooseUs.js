import React from "react";
import "../css/WhyChooseUs.css"; // ✅ Import the CSS file

const WhyChooseUs = () => {
  return (
    <section className="why-choose-wrapper">
      <h2>Why Choose Lime Lounge</h2>

      <div className="why-choose-grid">
        <div className="why-choose-item">
          <img
            src="https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=400&q=80"
            alt="Authentic Cuisine"
          />
          <h3>Authentic Cuisine</h3>
          <p>
            We serve traditional Persian recipes crafted with love and fresh
            ingredients.
          </p>
        </div>

        <div className="why-choose-item">
          <img
            src="https://images.unsplash.com/photo-1600891964373-3b29b2ae2b00?auto=format&fit=crop&w=400&q=80"
            alt="Exceptional Service"
          />
          <h3>Exceptional Service</h3>
          <p>
            Our friendly team delivers a premium experience whether you dine in
            or order online.
          </p>
        </div>

        <div className="why-choose-item">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
            alt="Elegant Ambiance"
          />
          <h3>Elegant Ambiance</h3>
          <p>
            Enjoy an atmosphere of comfort and class with decor inspired by
            Persian culture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
