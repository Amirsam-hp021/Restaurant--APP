import React, { useState } from "react";
import "../css/ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    alert("Thank you! We’ll get back to you soon.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="contact-form-container">
      <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
