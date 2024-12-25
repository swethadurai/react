import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import './contact.css'
const Contact2Section = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with custom duration
  }, []);

  return (
    <div className="contact2-section">
      <div
        className="contact2-image"
        data-aos="fade-right" // AOS animation
      >
        <img
          src="https://via.placeholder.com/500x500"
          alt="Contact2 Illustration"
        />
      </div>
      <div
        className="contact2-form"
        data-aos="fade-left" // AOS animation
      >
        <h2>Contact2 Us</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact2Section;
