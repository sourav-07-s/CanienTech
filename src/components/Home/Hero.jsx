import { Link } from "react-router-dom";
import heroBg from "../../assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712]">
      {/* Hero Background */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          scale-105
        "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/55"
      />

      {/* Blue Gradient */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-blue-950/50
          via-[#030712]/20
          to-[#030712]
        "
      />

      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[140px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-6xl
          items-center
          justify-center
          px-6
          pt-24
          text-center
        "
      >
        <div className="max-w-5xl">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.4em]
              text-cyan-300
              sm:text-sm
            "
          >
            CANIEN TECH
          </p>

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Empowering{" "}
            <span
              className="
                text-cyan-300
                drop-shadow-[0_0_15px_rgba(34,211,238,0.45)]
              "
            >
              Digital Transformation
            </span>
          </h1>

          <p
            className="
              mt-6
              text-xl
              font-medium
              text-white/90
              sm:text-2xl
            "
          >
            The Future of Business is Digital
          </p>

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-base
              leading-8
              text-white/60
              sm:text-lg
            "
          >
            We help businesses evolve confidently through innovative
            technology solutions, digital engineering, AI, cloud,
            cybersecurity, and digital marketing.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <Link
              to="/services"
              className="
                group
                rounded-full
                border
                border-cyan-300/25
                bg-cyan-400/15
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-300/40
                hover:bg-cyan-400/25
                hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
              "
            >
              Explore Our Services

              <span
                className="
                  ml-2
                  inline-block
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>

            <Link
              to="/contact"
              className="
                rounded-full
                border
                border-white/20
                bg-white/[0.05]
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/35
                hover:bg-white/10
              "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-40
          w-full
          bg-gradient-to-t
          from-[#030712]
          to-transparent
        "
      />

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          md:flex
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/35
          "
        >
          Scroll
        </span>

        <span
          aria-hidden="true"
          className="
            mt-2
            h-8
            w-px
            bg-gradient-to-b
            from-cyan-300
            to-transparent
          "
        />
      </div>
    </section>
  );
};

export default Hero;