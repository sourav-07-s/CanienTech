import ServiceHero from "./ServiceHero";
import ServiceDetailCard from "./ServiceDetailCard";
import { serviceDetails } from "../data/serviceDetails";

const Services = () => {
  return (
    <>
      <ServiceHero />

      <section
        className="
          relative
          overflow-hidden
          px-6
          pb-28
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-96
            w-175
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/4
            blur-[130px]
          "
        />

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

export default Services;