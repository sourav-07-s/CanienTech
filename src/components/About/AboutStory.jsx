import Reveal from "../ui/Reveal";

const AboutStory = () => {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/3
          h-96
          w-96
          rounded-full
          bg-blue-500/[0.05]
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-12
          lg:grid-cols-2
        "
      >
        <Reveal>
          <div>
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.3em]
                text-cyan-300
              "
            >
              WHO WE ARE
            </p>

            <div
              className="
                mt-4
                h-[2px]
                w-16
                rounded-full
                bg-cyan-300
                shadow-[0_0_10px_#22d3ee]
              "
            />

            <h2
              className="
                mt-6
                text-3xl
                font-bold
                leading-tight
                text-white
                sm:text-4xl
              "
            >
              Technology with a
              <span className="text-cyan-300">
                {" "}
                Purpose
              </span>
            </h2>

            <p
              className="
                mt-6
                text-base
                leading-8
                text-white/50
              "
            >
              Modern businesses need more than technology. They need
              practical solutions that create meaningful business value.
            </p>

            <p
              className="
                mt-5
                text-base
                leading-8
                text-white/50
              "
            >
              Our approach focuses on understanding challenges, designing
              thoughtful solutions, and building digital experiences that
              are scalable, reliable, and easy to use.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.04]
              p-8
              backdrop-blur-2xl
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-48
                w-48
                rounded-full
                bg-cyan-400/[0.08]
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-cyan-400/[0.14]
              "
            />

            <div className="relative space-y-5">
              <div className="h-px w-full bg-white/10" />

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  01
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Understand
                  </h3>

                  <p className="mt-1 text-sm text-white/40">
                    Discover the real business challenge.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  02
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Design
                  </h3>

                  <p className="mt-1 text-sm text-white/40">
                    Create a solution around the user's needs.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  03
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Deliver
                  </h3>

                  <p className="mt-1 text-sm text-white/40">
                    Build technology that can grow with the business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutStory;