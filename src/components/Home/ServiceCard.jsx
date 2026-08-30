import Reveal from "../ui/Reveal";

const ServiceCard = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <Reveal delay={delay}>
      <article
        className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/4
          p-8
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-300/30
          hover:bg-white/[0.07]
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-linear-to-br
            from-blue-600
            to-cyan-500
            text-2xl
            transition
            group-hover:scale-110
          "
        >
          {icon}
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/50">
          {description}
        </p>

        <button className="mt-6 text-sm text-cyan-300">
          Learn More →
        </button>
      </article>
    </Reveal>
  );
};

export default ServiceCard;