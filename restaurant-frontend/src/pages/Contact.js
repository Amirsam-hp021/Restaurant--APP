import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-info">
        <p>
          📍 <span>Komitas 20, Yerevan, Armenia</span>
        </p>
        <p>
          📞 <span>093 300 440</span> or <span>044 200 620</span>
        </p>
        <p>
          🕒 <span>Open Daily: 11:00 AM – 11:00 PM</span>
        </p>

        <a href="tel:093300440" className="contact-btn call-btn">
          📞 Call Now
        </a>

        <a
          href="https://wa.me/37493300440"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp-btn"
        >
          💬 Message on WhatsApp
        </a>
      </div>

      {/* ✅ Correct Google Map Location */}
      <div className="map-container">
        <iframe
          title="Lime Lounge Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.09315994051403!2d44.498141121579476!3d40.20220083026484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abda997585f0f%3A0xd48e8031e27f2d92!2sLime%20Lounge%20Cafe!5e0!3m2!1sen!2sam!4v1711323014972!5m2!1sen!2sam"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "12px", marginTop: "2rem" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
