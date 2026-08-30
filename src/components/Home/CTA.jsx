import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="
      relative
      overflow-hidden
      bg-linear-to-r
      from-blue-900
      via-blue-800
      to-blue-950
      px-6
      py-28
      text-center
    ">

      <div className="
        absolute
        left-1/2
        top-1/2
        h-125
        w-175
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-400/10
        blur-[140px]
      " />

      <div className="relative z-10 mx-auto max-w-4xl">

        <p className="
          text-sm
          uppercase
          tracking-[0.3em]
          text-cyan-300
        ">
          LET'S BUILD TOGETHER
        </p>

        <h2 className="
          mt-5
          text-4xl
          font-bold
          sm:text-5xl
          md:text-6xl
        ">
          Ready to Transform
          <br />
          Your Business?
        </h2>

        <p className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-blue-100/65
        ">
          Let's explore how technology can help your business
          move faster and grow smarter.
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
            to="/contact"
            className="
              rounded-full
              bg-white
              px-8
              py-4
              font-semibold
              text-blue-800
              transition
              hover:-translate-y-1
              hover:bg-cyan-50
            "
          >
            Get In Touch
          </Link>

          <Link
            to="/services"
            className="
              rounded-full
              border
              border-white/25
              bg-white/5
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition
              hover:-translate-y-1
              hover:bg-white/10
            "
          >
            View Services
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CTA;