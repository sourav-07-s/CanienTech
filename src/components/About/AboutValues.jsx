import SectionHeading from "../ui/SectionHeading";
import ValueCard from "./ValueCard";

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We continuously explore better technologies and smarter ways to solve business problems.",
  },
  {
    number: "02",
    title: "Customer First",
    description:
      "We focus on creating solutions around real customer needs and meaningful outcomes.",
  },
  {
    number: "03",
    title: "Quality",
    description:
      "We believe reliable engineering and thoughtful execution are the foundation of great products.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "We work closely with clients and teams to turn ideas into effective digital solutions.",
  },
];

const AboutValues = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-28
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-96
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.04]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="OUR VALUES"
          line
          title="What Drives Us"
          description="The principles that shape how we think, build, and work."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <ValueCard
              key={value.number}
              {...value}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;