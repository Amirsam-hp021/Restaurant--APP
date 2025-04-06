import React from "react";
import { Link } from "react-router-dom";
import "../css/Order.css";

// Icons
import { FaPhone, FaUtensils, FaWhatsapp } from "react-icons/fa";

const Order = () => {
  const whatsappNumbers = [
    { number: "+37493300440", label: "WhatsApp 1" },
    { number: "+37444200620", label: "WhatsApp 2" },
  ];

  const callNumbers = [
    { number: "+37493300440", label: "Call Now 1" },
    { number: "+37444200620", label: "Call Now 2" },
  ];

  const generateWhatsAppLink = (number) => {
    const message = encodeURIComponent("Hi, I want to order from the menu.");
    return `https://wa.me/${number.replace("+", "")}?text=${message}`;
  };

  return (
    <div className="order-page">
      <h1 className="order-title">Order Now</h1>
      <p className="coming-soon-text">
        Online ordering will be available soon!
      </p>

      {/* Menu Link */}
      <div>
        <Link to="/menu" className="order-button menu-button">
          <FaUtensils style={{ marginRight: "8px" }} />
          View Menu
        </Link>
      </div>

      {/* WhatsApp Buttons */}
      <div>
        {whatsappNumbers.map((w, i) => (
          <a
            key={i}
            href={generateWhatsAppLink(w.number)}
            target="_blank"
            rel="noopener noreferrer"
            className="order-button whatsapp-button"
          >
            <FaWhatsapp style={{ marginRight: "8px" }} />
            {w.label}
          </a>
        ))}
      </div>

      {/* Call Buttons */}
      <div>
        {callNumbers.map((c, i) => (
          <a
            key={i}
            href={`tel:${c.number}`}
            className="order-button call-button"
          >
            <FaPhone style={{ marginRight: "8px" }} />
            {c.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Order;
