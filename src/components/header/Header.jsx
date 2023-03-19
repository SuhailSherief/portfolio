import React, { useState } from "react";
import "./Header.css";
import { Helmet } from "react-helmet";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
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
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            シェリエフ
          </a>
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  onClick={() => setActiveNav("#services")}
                  className={
                    activeNav === "#services"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-message nav__icon"></i> Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#projects"
                  onClick={() => setActiveNav("#projects")}
                  className={
                    activeNav === "#projects"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-scenery nav__icon"></i> Projects
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
