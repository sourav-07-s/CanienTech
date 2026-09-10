import StatCard from "./StatCard";
import { stats } from " ../../../src/components/data/stats";

const Stats = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-transparent
        px-6
        py-24
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-80
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.05]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              {...stat}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;