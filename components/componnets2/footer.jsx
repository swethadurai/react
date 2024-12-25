import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './footer.css'; // Import the footer2 CSS

const Footer2 = () => {
  return (
    <footer2 className="footer2">
      <div className="footer2-container">
        <div className="footer2-text">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
        <div>
          <ul className="footer2-social-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer2>
  );
};

export default Footer2;
