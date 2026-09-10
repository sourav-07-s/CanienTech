import Reveal from "../ui/Reveal";

const ServiceDetailCard = ({
  icon: Icon,
  title,
  shortDescription,
  description,
  features = [],
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
          p-8
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
            -right-16
            -top-16
            h-44
            w-44
            rounded-full
            bg-cyan-400/[0.07]
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-cyan-400/[0.14]
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
            text-white
            shadow-[0_10px_30px_rgba(34,211,238,0.12)]
            transition-transform
            duration-500
            group-hover:scale-110
          "
        >
          {Icon && <Icon size={25} strokeWidth={1.8} />}
        </div>

        {/* Title */}
        <h2 className="relative mt-6 text-2xl font-semibold text-white">
          {title}
        </h2>

        {/* Short description */}
        <p className="relative mt-2 text-sm text-cyan-300/80">
          {shortDescription}
        </p>

        {/* Description */}
        <p className="relative mt-5 text-sm leading-7 text-white/50">
          {description}
        </p>

        {/* Features */}
        <div className="relative mt-7 border-t border-white/10 pt-6">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-white/35
            "
          >
            What We Offer
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_8px_#22d3ee]
                  "
                />

                {feature}
              </div>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default ServiceDetailCard;