import Reveal from "../ui/Reveal";

const StoryCard = ({
  category,
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
        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-48
            w-48
            rounded-full
            bg-cyan-400/8
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-cyan-400/15
          "
        />

        {/* Visual */}
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
              inset-0
              opacity-60
              transition-transform
              duration-700
              group-hover:scale-110
            "
          >
            <div className="
              absolute
              left-10
              top-10
              h-28
              w-28
              rounded-full
              bg-cyan-400/20
              blur-2xl
            " />

            <div className="
              absolute
              bottom-5
              right-10
              h-32
              w-32
              rounded-full
              bg-blue-500/20
              blur-3xl
            " />

            <div className="
              absolute
              inset-x-8
              bottom-8
              h-px
              bg-cyan-300/30
            " />
          </div>

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
              tracking-[0.2em]
              text-cyan-300
              backdrop-blur-md
            "
          >
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="relative p-7">
          <h3
            className="
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

          <p className="mt-4 text-sm leading-7 text-white/50">
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
            View Case Study →
          </button>
        </div>
      </article>
    </Reveal>
  );
};

export default StoryCard;