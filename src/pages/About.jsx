import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutValues from "../components/About/AboutValues";
import usePageMeta from "../components/hooks/usePageMeta";

export const About = () => {
  usePageMeta(
    "About | Canien Tech",
    "Learn about Canien Tech, our approach, values, and vision for building modern digital solutions."
  );

  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
    </>
  );
};