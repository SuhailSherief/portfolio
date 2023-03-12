import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">シェリエフ</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="https://suhailsherief.github.io/social/" className="footer__link">
              Socials
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/SuhailSherief"
            className="footer__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.facebook.com/suhail.sherief.3/"
            className="footer__social-link"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/suhail_sherief_/"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/suhail_sherief"
            className="footer__social-link"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; SuhailSherief. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
