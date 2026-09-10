import Reveal from "../ui/Reveal";

const ServiceCard = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <Reveal delay={delay}>
      <article
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          p-8
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-300/30
          hover:bg-white/[0.07]
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            -right-12
            -top-12
            h-32
            w-32
            rounded-full
            bg-cyan-400/10
            blur-3xl
            transition
            duration-500
            group-hover:bg-cyan-400/20
          "
        />

        {/* Icon */}
        <div
          className="
            relative
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
            shadow-[0_10px_30px_rgba(34,211,238,0.12)]
            transition-all
            duration-500
            group-hover:scale-110
          "
        >
          {icon}
        </div>

        <h3 className="relative mt-6 text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="relative mt-4 min-h-20 text-sm leading-7 text-white/50">
          {description}
        </p>

        <button
          type="button"
          className="
            relative
            mt-6
            text-sm
            font-medium
            text-cyan-300
            transition
            hover:text-white
          "
        >
          Learn More →
        </button>
      </article>
    </Reveal>
  );
};

export default ServiceCard;