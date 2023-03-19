import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Project from "./components/projects/Project";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Suhail Sherief</title>
        <meta name="keywords" content="SuhailSherief, Suhail, Sherief, suhail_sherief_, suhail_sherief" />
        <meta name="description" content="Full-time geek exploring existence and building his own legacy. Join with me down below and let's get cracking!" />
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
        <meta name="og:title" content="Suhail Sherief"/>
        <meta name="og:type" content="portfolio"/>
        <meta name="og:url" content="https://www.sherief.engineer/"/>
        <meta name="og:image" content="https://raw.githubusercontent.com/SuhailSherief/portfolio/main/src/assets/about.jpg"/>
        <meta name="og:site_name" content="SuhailSherief"/>
        <meta name="og:description" content="Full-time geek exploring existence and building his own legacy. Join with me down below and let's get cracking!"/>
        <meta name="og:email" content="suhailsherief67@gmail.com"/>
      </Helmet>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Project />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
