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
import VerticalSlider from "./CommonComps/TextChanging";
import EmptyContainer from "./styledComps/containers";
// Imports ------

const Homepage = () => {
  return (
    <>
      <Firstfold />
      <VideoPlayer />
      <CompaniesMarquee />
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
