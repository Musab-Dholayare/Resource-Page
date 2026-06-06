import React from "react";
import { BookOpen } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

export default function Footer({
  title,
  description,
  explore,
  learning,
  support,
}) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-box">
              <BookOpen size={18} />
            </div>
            <h2>{title}</h2>
          </div>

          <p>{description}</p>

          <div className="social-icons">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaLinkedin size={20} />
            <FaInstagram size={20} />
            <FaGithub size={20} />
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          {explore.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className="footer-links">
          <h3>Learning</h3>
          {learning.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className="footer-links">
          <h3>Support</h3>
          {support.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2024 EduBlog. All rights reserved. Empowering education worldwide.
        </p>

        <div className="bottom-links">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}