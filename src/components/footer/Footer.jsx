import React from "react";
import "./footer.css";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <>
      <Helmet>
        <title>Suhail Sherief</title>
        <meta
          name="keywords"
          content="SuhailSherief, Suhail, Sherief, suhail_sherief_, suhail_sherief"
        />
        <meta
          name="description"
          content="Full-time geek exploring existence and building his own legacy. Join with me down below and let's get cracking!"
        />
        <meta name="subject" content="Student and Developer" />
        <meta name="copyright" content="SuhailSherief" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large" />
        <meta name="topic" content="Suhail's portfolio" />
        <meta name="summary" content="Student and Developer" />
        <meta name="Classification" content="Business" />
        <meta name="author" content="SuhailSherief, suhailscreed@gmail.com" />
        <meta name="reply-to" content="suhailsherief67@gmail.com" />
        <meta name="owner" content="SuhailSherief" />
        <meta name="url" content="https://www.sherief.engineer/" />
        <meta name="identifier-URL" content="https://www.sherief.engineer/" />
        <meta name="category" content="portfolio" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="og:title" content="Suhail Sherief" />
        <meta name="og:type" content="portfolio" />
        <meta name="og:url" content="https://www.sherief.engineer/" />
        <meta
          name="og:image"
          content="https://raw.githubusercontent.com/SuhailSherief/portfolio/main/src/assets/about.jpg"
        />
        <meta name="og:site_name" content="SuhailSherief" />
        <meta
          name="og:description"
          content="Full-time geek exploring existence and building his own legacy. Join with me down below and let's get cracking!"
        />
        <meta name="og:email" content="suhailsherief67@gmail.com" />
      </Helmet>
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
              <a
                href="https://suhailsherief.github.io/social/"
                className="footer__link"
              >
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
          <span className="footer__copy">
            &#169; SuhailSherief. All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
