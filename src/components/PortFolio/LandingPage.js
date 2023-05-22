import React from "react";
import Header from "./Header/Header";
import HomeMy from "./Home/HomeMy";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Scroll from "./Scroll/Scroll";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <HomeMy />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Scroll />
    </>
  );
};

export default LandingPage;
