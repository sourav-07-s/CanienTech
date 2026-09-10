import Reveal from "../ui/Reveal";

const InsightArticleCard = ({
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
          rounded-3xl
          border
          border-white/10
          bg-white/4
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-300/25
          hover:bg-white/[0.07]
        "
      >
        {/* Visual area */}
        <div
          className="
            relative
            h-52
            overflow-hidden
            bg-linear-to-br
            from-blue-950
            via-slate-900
            to-cyan-950
          "
        >
          <div
            className="
              absolute
              left-10
              top-10
              h-28
              w-28
              rounded-full
              bg-cyan-400/15
              blur-3xl
              transition-transform
              duration-700
              group-hover:scale-125
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-10
              h-32
              w-32
              rounded-full
              bg-blue-500/15
              blur-3xl
              transition-transform
              duration-700
              group-hover:scale-125
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-[#030712]
              via-transparent
              to-transparent
            "
          />

          <span
            className="
              absolute
              bottom-5
              left-6
              rounded-full
              border
              border-cyan-300/20
              bg-black/20
              px-3
              py-1
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-cyan-300
              backdrop-blur-md
            "
          >
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="relative p-7">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/30">
              {date}
            </span>

            <span className="text-xs text-white/20 transition-colors duration-300 group-hover:text-cyan-300/60">
              ARTICLE
            </span>
          </div>

          <h2
            className="
              mt-5
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
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-white/45
            "
          >
            {description}
          </p>

          <button
            type="button"
            className="
              mt-6
              text-sm
              font-medium
              text-cyan-300
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Read Article →
          </button>
        </div>
      </article>
    </Reveal>
  );
};

export default InsightArticleCard;