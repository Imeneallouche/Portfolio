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
      <Header />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default Home;
