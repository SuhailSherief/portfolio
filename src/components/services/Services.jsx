import React, { useState } from "react";
import "./services.css";
import { Helmet } from "react-helmet";

function Services() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
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
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                Fullstack <br /> Developer
              </h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(1)}>
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-description">
                  Fullstack Developer
                </h3>
                <p className="services__modal-description">
                  Service with more than 2 years of experience. Providing
                  quality work to clients on companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop API and Applications.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                Blockchain <br /> Enthusiast
              </h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(2)}>
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-description">
                  Blockchain Enthusiast
                </h3>
                <p className="services__modal-description">
                  Service with more than 1 year of experience. Providing quality
                  work to clients on companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop blockchain based solutions.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Crypto wallet development.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Ordinals inscription in BTC chain.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">
                Visual <br /> Designer
              </h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-description">Visual Designer</h3>
                <p className="services__modal-description">
                  Service with more than 3 years of experience. Providing
                  quality work to clients on companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create models using photoshop and after effects.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Visual effects for montages.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Expertise in vegas, pr, ae.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
