import StatCard from "./StatCard";
import { stats } from "../data/stats";

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