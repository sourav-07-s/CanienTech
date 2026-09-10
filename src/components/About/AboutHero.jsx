const AboutHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        pb-24
        pt-40
        text-center
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          h-105
          w-180
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.07]
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-4xl">
        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.35em]
            text-cyan-300
            sm:text-sm
          "
        >
          ABOUT CANIEN TECH
        </p>

        <div
          className="
            mx-auto
            mt-4
            h-0.5
            w-20
            rounded-full
            bg-cyan-300
            shadow-[0_0_12px_#22d3ee]
          "
        />

        <h1
          className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            text-white
            sm:text-5xl
            md:text-6xl
          "
        >
          Building the
          <span className="text-cyan-300">
            {" "}
            Future Through Technology
          </span>
        </h1>

        <p
          className="
            mx-auto
            mt-7
            max-w-2xl
            text-base
            leading-8
            text-white/50
            sm:text-lg
          "
        >
          We combine technology, creativity, and engineering to help
          businesses build better digital experiences and solve complex
          challenges.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;