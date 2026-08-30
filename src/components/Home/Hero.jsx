import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="
          absolute inset-0
          scale-105
          bg-cover
          bg-center
          animate-[heroZoom_18s_ease-in-out_infinite_alternate]
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Blue overlay */}
      <div className="
        absolute inset-0
        bg-linear-to-b
        from-blue-950/70
        via-black/30
        to-[#030712]
      " />

      {/* Glow */}
      <div className="
        absolute
        left-1/2
        top-1/2
        h-112.5
        w-175
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-500/10
        blur-[140px]
      " />

      {/* Content */}
      <div className="
        relative z-10
        flex min-h-screen
        items-center
        justify-center
        px-6
        pt-24
        text-center
      ">

        <div className="max-w-5xl">

          <p className="
            text-sm
            uppercase
            tracking-[0.4em]
            text-cyan-300
            animate-[fadeUp_.8s_ease-out]
          ">
            CANIEN TECH
          </p>

          <h1 className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          ">
            Empowering{" "}
            <span className="
              text-cyan-300
              drop-shadow-[0_0_18px_rgba(34,211,238,0.4)]
            ">
              Digital Transformation
            </span>
          </h1>

          <p className="
            mt-7
            text-xl
            text-white/90
            sm:text-2xl
          ">
            The Future of Business is Digital
          </p>

          <p className="
            mx-auto
            mt-7
            max-w-3xl
            text-base
            leading-8
            text-white/60
            sm:text-lg
          ">
            We help businesses evolve confidently through
            innovative technology solutions, digital
            engineering, AI, cloud, and cybersecurity.
          </p>

          <div className="
            mt-10
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
          ">

            <Link
              to="/services"
              className="
                rounded-full
                border
                border-cyan-300/20
                bg-cyan-400/15
                px-8 py-4
                font-semibold
                text-white
                backdrop-blur-xl
                transition
                hover:-translate-y-1
                hover:bg-cyan-400/25
                hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
              "
            >
              Explore Our Services →
            </Link>

            <Link
              to="/contact"
              className="
                rounded-full
                border
                border-white/20
                bg-white/5
                px-8 py-4
                font-semibold
                text-white
                backdrop-blur-xl
                transition
                hover:-translate-y-1
                hover:bg-white/10
              "
            >
              Get Started
            </Link>

          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="
        absolute bottom-0 left-0
        h-48 w-full
        bg-linear-to-t
        from-[#030712]
        to-transparent
      " />

    </section>
  );
};

export default Hero;