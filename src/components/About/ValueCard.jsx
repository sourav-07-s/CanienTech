import Reveal from "../ui/Reveal";

const ValueCard = ({
  number,
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
          p-7
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-300/25
          hover:bg-white/[0.07]
        "
      >
        <div
          className="
            absolute
            -right-10
            -top-10
            h-28
            w-28
            rounded-full
            bg-cyan-400/[0.06]
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-cyan-400/[0.12]
          "
        />

        <div
          className="
            relative
            text-sm
            font-semibold
            tracking-[0.2em]
            text-cyan-300
          "
        >
          {number}
        </div>

        <h3
          className="
            relative
            mt-5
            text-xl
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-200
          "
        >
          {title}
        </h3>

        <p
          className="
            relative
            mt-4
            text-sm
            leading-7
            text-white/45
          "
        >
          {description}
        </p>
      </article>
    </Reveal>
  );
};

export default ValueCard;