import { useEffect, useRef, useState } from "react";
import { stats } from "../data/stats";
import StatCard from "./StatCard";

const Stats = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="
        relative
        overflow-hidden
        bg-linear-to-r
        from-blue-900
        via-blue-800
        to-blue-950
        px-6
        py-20
      "
    >

      <div className="
        absolute
        left-1/2
        top-1/2
        h-87.5
        w-150
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-400/10
        blur-[120px]
      " />

      <div className="
        relative
        mx-auto
        grid
        max-w-7xl
        grid-cols-2
        gap-10
        text-center
        lg:grid-cols-4
      ">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.id}
            {...stat}
            visible={visible}
            delay={index * 100}
          />
        ))}
      </div>

    </section>
  );
};

export default Stats;