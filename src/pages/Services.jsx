import ServiceHero from "../components/Services/ServiceHero";
import ServiceDetailCard from "../components/Services/ServiceDetailCard";
import { serviceDetails } from "../components/data/serviceDetails";
import usePageMeta from "../components/hooks/usePageMeta";

export const Services = () => {
  usePageMeta(
    "Services | Canien Tech",
    "Explore Canien Tech services across cloud solutions, AI, cybersecurity, digital marketing, enterprise solutions, and digital engineering."
  );

  return (
    <>
      <ServiceHero />

      <section className="relative overflow-hidden px-6 pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {serviceDetails.map((service, index) => (
              <ServiceDetailCard
                key={service.id}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};