import Reveal from "../ui/Reveal";

const InsightCard = ({
  category,
  title,
  description,
  date,
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
          bg-white/[0.035]
          p-7
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-300/25
          hover:bg-white/[0.06]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-cyan-400/[0.07]
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-cyan-400/[0.14]
          "
        />

        <div className="relative flex items-center justify-between">
          <span
            className="
              rounded-full
              border
              border-cyan-300/20
              bg-cyan-300/[0.06]
              px-3
              py-1
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-cyan-300
            "
          >
            {category}
          </span>

          <span className="text-xs text-white/30">
            {date}
          </span>
        </div>

        <h3
          className="
            relative
            mt-7
            text-xl
            font-semibold
            leading-snug
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-200
          "
        >
          {title}
        </h3>

        <p className="relative mt-4 text-sm leading-7 text-white/45">
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
            transition-colors
            duration-300
            hover:text-white
          "
        >
          Read More →
        </button>
      </article>
    </Reveal>
  );
};

export default InsightCard;