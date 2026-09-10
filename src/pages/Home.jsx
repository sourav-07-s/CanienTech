import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Stats from "../components/Home/Stats";
import SuccessStories from "../components/Home/SuccessStories";
import Insights from "../components/Home/Insights";
import CTA from "../components/Home/CTA";
import usePageMeta from "../components/hooks/usePageMeta";

const Home = () => {
  usePageMeta(
    "Canien Tech | Digital Transformation & Technology Solutions",
    "Canien Tech delivers modern technology solutions across digital engineering, cloud, AI, cybersecurity, enterprise solutions, and digital transformation."
  );

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