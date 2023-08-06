import React from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";
import Services from "../Components/Services";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="bg-dark-grey w-screen flex flex-col">
      <Header id="Home" />
      <About id="About" />
      <Projects id="Projects" />
      <Services id="Services" />
      <Testimonials id="Testimonials" />
      <Contact id="Contact" />
      <Footer id="Hire me" />
    </div>
  );
}

export default Home;
