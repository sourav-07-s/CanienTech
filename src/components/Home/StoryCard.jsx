import Reveal from "../ui/Reveal";

const StoryCard = ({
  image,
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
        border-white/15
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-300/30
      ">

        <div className="relative h-72 overflow-hidden">

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

          <div className="
            absolute
            inset-0
            bg-linear-to-t
            from-blue-950
            via-transparent
            to-transparent
          " />

        </div>

        <div className="p-8">

          <h3 className="text-2xl font-semibold">
            {title}
          </h3>

          <p className="
            mt-4
            leading-8
            text-blue-100/60
          ">
            {description}
          </p>

          <button className="
            mt-6
            text-cyan-300
            transition
            hover:text-white
          ">
            Read Case Study →
          </button>

        </div>

      </article>

    </Reveal>
  );
};

export default StoryCard;