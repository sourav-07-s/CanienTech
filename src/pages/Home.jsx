import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Stats from "../components/Home/Stats";
import SuccessStories from "../components/home/SuccessStories";
import Insights from "../components/home/Insights";
import CTA from "../components/home/CTA";

 export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <SuccessStories />
      <Insights />
      <CTA />
    </>
  );
};

