"use client";
import { useEffect, useState } from "react";
import AboutUs from "./(frontendPages)/home/components/AboutUs";
import Benefits from "./(frontendPages)/home/components/Benefits";
import CompaniesMarquee from "./(frontendPages)/home/components/CompaniesMarquee";
import FAQ from "./(frontendPages)/home/components/FAQ";
import Firstfold from "./(frontendPages)/home/components/firstFold";
import Projects from "./(frontendPages)/home/components/Projects";
// import SliderOfLove from "./(frontendPages)/home/components/SliderOfLove";
import VideoPlayer from "./(frontendPages)/home/components/VideoPlayer";
import WhatWeDo from "./(frontendPages)/home/components/WhatWeDo";
import Footer from "./CommonComps/Footer";
import EmptyContainer from "./styledComps/containers";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Testimonials from "./(frontendPages)/home/components/Testimonials";
import ContactForm from "./CommonComps/ContactModal";
// Imports ------

const Homepage = () => {

  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => { });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // onClick={() => setFormVisible(true)}

  return (
    <div id="body-scroll">
      <Firstfold />
      <CompaniesMarquee />
      <VideoPlayer />
      <WhatWeDo />
      <EmptyContainer height="76px" />
      <Projects />
      <EmptyContainer height="76px" />
      {/* <SliderOfLove /> */}
      <Testimonials />
      <EmptyContainer height="76px" />
      <AboutUs />
      <EmptyContainer height="76px" />
      <Benefits />
      <EmptyContainer height="76px" />
      <FAQ />
      <Footer />
      <div className="custom-cursor"></div>


      {/* contact form */}
      <ContactForm show={formVisible} onClose={() => setFormVisible(false)} />
    </div>
  );
};

export default Homepage;
