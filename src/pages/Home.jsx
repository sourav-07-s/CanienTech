import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import SuccessStories from "../components/home/SuccessStories";
import Insights from "../components/home/Insights";
import CTA from "../components/Home/CTA";

const Home = () => {
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

export default Home;