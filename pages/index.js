import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import ImageSlider from "../components//slider/slider";
import AffiliateCompanies from "../components/affiliate/AffiliateCompanies ";

export default function Home() {
  return (
    <Fragment>
      <ImageSlider />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <AffiliateCompanies />
      <Contact />
    </Fragment>
  );
}
