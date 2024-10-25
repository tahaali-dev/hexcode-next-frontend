"use client";
import { useEffect } from "react";
import AboutUs from "./(frontendPages)/home/components/AboutUs";
import Benefits from "./(frontendPages)/home/components/Benefits";
import CompaniesMarquee from "./(frontendPages)/home/components/CompaniesMarquee";
import FAQ from "./(frontendPages)/home/components/FAQ";
import Firstfold from "./(frontendPages)/home/components/firstFold";
import Projects from "./(frontendPages)/home/components/Projects";
import SliderOfLove from "./(frontendPages)/home/components/SliderOfLove";
import VideoPlayer from "./(frontendPages)/home/components/VideoPlayer";
import WhatWeDo from "./(frontendPages)/home/components/WhatWeDo";
import Footer from "./CommonComps/Footer";
import EmptyContainer from "./styledComps/containers";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
// Imports ------

const Homepage = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Firstfold />
      <CompaniesMarquee />
      <VideoPlayer />
      <WhatWeDo />
      <EmptyContainer height="76px" />
      <Projects />
      <EmptyContainer height="76px" />
      <SliderOfLove />
      <EmptyContainer height="76px" />
      <AboutUs />
      <EmptyContainer height="76px" />
      <Benefits />
      <EmptyContainer height="76px" />
      <FAQ />
      <Footer />
    </>
  );
};

export default Homepage;

// Things to do today 25 oct 2024
// -- Header Scroll hide and show - when scroll up hide header when scroll down show header (done)
// -- change position of companies marquee after first fold also marquee logos sizes consistent (done 1/2)
// -- Highlighted text roll animation in first fold ()
// -- videPlayer animation on scroll play with width and height not Scaling ()
// -- Primary btn animation more smooth ()
// -- Dashed svg animate in what we do section ()
// -- scroll cursor and scroll fix in The slider of Love ()
