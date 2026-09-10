const ServiceHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        pb-20
        pt-40
        text-center
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-96
          w-175
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
          OUR SERVICES
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
          Technology Solutions
          <span className="text-cyan-300">
            {" "}
            Built to Move Business Forward
          </span>
        </h1>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-8
            text-white/50
            sm:text-lg
          "
        >
          From cloud and AI to cybersecurity and digital engineering,
          we create solutions designed for modern businesses.
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;