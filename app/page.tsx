import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
