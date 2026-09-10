import Reveal from "../ui/Reveal";

const JobCard = ({
  title,
  department,
  location,
  type,
  description,
  skills,
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
            group-hover:bg-cyan-400/13
          "
        />

        <div className="relative flex flex-wrap gap-2">
          <span
            className="
              rounded-full
              border
              border-cyan-300/20
              bg-cyan-300/6
              px-3
              py-1
              text-[10px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-cyan-300
            "
          >
            {department}
          </span>

          <span
            className="
              rounded-full
              border
              border-white/10
              bg-white/4
              px-3
              py-1
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white/40
            "
          >
            {type}
          </span>
        </div>

        <h2
          className="
            relative
            mt-6
            text-2xl
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-200
          "
        >
          {title}
        </h2>

        <div className="relative mt-3 flex items-center gap-2 text-sm text-white/35">
          <span>{location}</span>
          <span>•</span>
          <span>{type}</span>
        </div>

        <p
          className="
            relative
            mt-5
            text-sm
            leading-7
            text-white/45
          "
        >
          {description}
        </p>

        <div className="relative mt-6 border-t border-white/10 pt-5">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-white/30
            "
          >
            Skills
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-lg
                  border
                  border-white/10
                  bg-white/3
                  px-3
                  py-1.5
                  text-xs
                  text-white/50
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="
            relative
            mt-7
            w-full
            rounded-xl
            border
            border-cyan-300/20
            bg-cyan-400/10
            px-5
            py-3
            text-sm
            font-medium
            text-cyan-300
            transition-all
            duration-300
            hover:border-cyan-300/35
            hover:bg-cyan-400/20
            hover:text-white
          "
        >
          Apply Now →
        </button>
      </article>
    </Reveal>
  );
};

export default JobCard;