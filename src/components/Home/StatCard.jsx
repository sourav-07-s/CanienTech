import Reveal from "../ui/Reveal";
import useCountUp from "../hooks/useCountUp";

const StatCard = ({
  value,
  suffix,
  label,
  delay = 0,
}) => {
  const { ref, count } = useCountUp(value);

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          px-6
          py-8
          text-center
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-cyan-300/20
          hover:bg-white/[0.07]
        "
      >
        <div
          className="
            text-4xl
            font-bold
            tracking-tight
            text-white
            transition-all
            duration-300
            group-hover:text-cyan-300
          "
        >
          {count}
          {suffix}
        </div>

        <p className="mt-3 text-sm text-white/45">
          {label}
        </p>
      </div>
    </Reveal>
  );
};

export default StatCard;