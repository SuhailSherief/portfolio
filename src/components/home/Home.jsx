import React from "react";
import Data from "./Data";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import Social from "./Social";
import { Helmet } from "react-helmet";

function Home() {
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
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </>
  );
}

export default Home;
