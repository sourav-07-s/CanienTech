import Reveal from "../ui/Reveal";

const ContactInfo = () => {
  return (
    <Reveal>
      <div className="space-y-5">
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-6
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-300/20
            hover:bg-white/[0.06]
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-cyan-400/10
                text-cyan-300
              "
            >
              @
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                Email
              </p>

              <p className="mt-2 text-sm text-white/70">
                hello@example.com
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-6
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-300/20
            hover:bg-white/[0.06]
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-cyan-400/10
                text-cyan-300
              "
            >
              ☎
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                Phone
              </p>

              <p className="mt-2 text-sm text-white/70">
                +91 00000 00000
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-6
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-300/20
            hover:bg-white/[0.06]
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-cyan-400/10
                text-cyan-300
              "
            >
              ◉
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                Location
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                India
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ContactInfo;