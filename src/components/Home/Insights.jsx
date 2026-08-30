import SectionHeading from "../ui/SectionHeading";
import InsightCard from "./InsightCard";
import { insights } from "../data/insights";

const Insights = () => {
  return (
    <section
      id="insights"
      className="bg-[#030712] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          label="INSIGHTS & INNOVATION"
          title="Latest Trends & Thought Leadership"
          description="Explore ideas, technologies, and trends shaping the digital world."
        />

        <div className="
          mt-16
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        ">

          {insights.map((item, index) => (
            <InsightCard
              key={item.id}
              {...item}
              delay={index * 100}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Insights;