import SectionHeading from "../ui/SectionHeading";
import InsightCard from "./InsightCard";
import { insights } from "../../data/insights";

const Insights = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-transparent
        px-6
        py-28
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/3
          h-96
          w-96
          rounded-full
          bg-cyan-500/[0.04]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="INSIGHTS & INNOVATION"
          line
          title="Ideas Shaping the Digital Future"
          description="Explore technology trends, digital strategies, and ideas that can help businesses stay ahead."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <InsightCard
              key={insight.id}
              {...insight}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;