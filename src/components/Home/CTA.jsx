import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-transparent
        px-6
        py-28
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-96
          w-175
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/8
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-4xl
            border
            border-white/10
            bg-white/4.5
            px-6
            py-16
            text-center
            backdrop-blur-2xl
            sm:px-10
            md:py-20
          "
        >
          {/* Top glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-3/4
              -translate-x-1/2
              bg-cyan-300/40
              shadow-[0_0_20px_rgba(34,211,238,0.4)]
            "
          />

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.35em]
              text-cyan-300
            "
          >
            LET'S BUILD SOMETHING GREAT
          </p>

          <h2
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-3xl
              font-bold
              leading-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Ready to Transform Your Business?
          </h2>

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
            Let&apos;s create innovative digital solutions that move your
            business forward and prepare it for what&apos;s next.
          </p>

          <div
            className="
              mt-9
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <Link
              to="/contact"
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
                hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
              "
            >
              Start a Conversation
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
              to="/services"
              className="
                rounded-full
                border
                border-white/15
                bg-white/4
                px-8
                py-4
                font-semibold
                text-white/90
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/30
                hover:bg-white/8
              "
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;