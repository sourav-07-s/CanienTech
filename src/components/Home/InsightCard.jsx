import Reveal from "../ui/Reveal";

const InsightCard = ({
  image,
  type,
  title,
  description,
  delay,
}) => {
  return (
    <Reveal delay={delay}>

      <article className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/4.5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-300/25
        hover:bg-white/[0.07]
      ">

        <div className="h-56 overflow-hidden">

          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-110
            "
          />

        </div>

        <div className="p-7">

          <p className="
            text-[11px]
            font-semibold
            tracking-[0.25em]
            text-cyan-300
          ">
            {type}
          </p>

          <h3 className="
            mt-4
            text-xl
            font-semibold
            leading-8
          ">
            {title}
          </h3>

          <p className="
            mt-4
            text-sm
            leading-7
            text-white/45
          ">
            {description}
          </p>

          <button className="
            mt-6
            text-sm
            font-medium
            text-cyan-300
            transition
            hover:text-white
          ">
            Read More →
          </button>

        </div>

      </article>

    </Reveal>
  );
};

export default InsightCard;