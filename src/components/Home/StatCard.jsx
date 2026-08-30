import useCountUp from "../hooks/useCountUp";

const StatCard = ({ value, suffix = "", label, visible, delay }) => {
  const count = useCountUp(value, 1500, visible);

  return (
    <div
      className={`
        transition-all
        duration-700

        ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <h3 className="text-4xl font-bold sm:text-5xl">
        {count}
        {suffix}
      </h3>

      <p
        className="
        mt-4
        text-sm
        text-blue-100/65
        sm:text-base
      "
      >
        {label}
      </p>
    </div>
  );
};

export default StatCard;
