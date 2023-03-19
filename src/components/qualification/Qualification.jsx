import React, { useState } from "react";
import "./qualification.css";
import { Helmet } from "react-helmet";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
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
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>
          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">College</h3>
                  <span className="qualification__subtitle">CSE - RMKEC</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Higher Secondary</h3>
                  <span className="qualification__subtitle">
                    CSE - TI School
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Secondary Education</h3>
                  <span className="qualification__subtitle">
                    grade 10 - Chinmaya Vidyalaya
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2013 - 2018
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Primary Education</h3>
                  <span className="qualification__subtitle">
                    grade 5 - Chinmaya Vidyalaya
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2008 - 2013
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Representative</h3>
                  <span className="qualification__subtitle">AICTE - RMKEC</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Intern</h3>
                  <span className="qualification__subtitle">
                    Apollo Supply Chain
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Grand Finalist</h3>
                  <span className="qualification__subtitle">
                    Smart India Hackathon
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
