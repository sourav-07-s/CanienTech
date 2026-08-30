import ServiceCard from "./ServiceCard";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../data/services";

const Services = () => {
  return (
    <section className="bg-[#030712] px-6 py-28">
      <div className="mx-auto max-w-7xl">


       <SectionHeading
         label =" WHAT WE DO"
        />
        <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
        <SectionHeading
         
          title="Comprehensive IT & Digital Solutions"
          description="Technology solutions designed to help businesses innovate, transform, and grow."
        />
        
        

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;