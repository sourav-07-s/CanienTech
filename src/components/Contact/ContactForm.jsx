import Reveal from "../ui/Reveal";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Reveal delay={150}>
      <form
        onSubmit={handleSubmit}
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          p-6
          backdrop-blur-2xl
          sm:p-8
        "
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm text-white/60"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-3.5
                text-sm
                text-white
                outline-none
                placeholder:text-white/25
                transition-all
                duration-300
                focus:border-cyan-300/40
                focus:bg-white/[0.06]
                focus:ring-1
                focus:ring-cyan-300/20
              "
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-white/60"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-3.5
                text-sm
                text-white
                outline-none
                placeholder:text-white/25
                transition-all
                duration-300
                focus:border-cyan-300/40
                focus:bg-white/[0.06]
                focus:ring-1
                focus:ring-cyan-300/20
              "
            />
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="subject"
            className="mb-2 block text-sm text-white/60"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="How can we help?"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-3.5
              text-sm
              text-white
              outline-none
              placeholder:text-white/25
              transition-all
              duration-300
              focus:border-cyan-300/40
              focus:bg-white/[0.06]
              focus:ring-1
              focus:ring-cyan-300/20
            "
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="message"
            className="mb-2 block text-sm text-white/60"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell us about your project..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-3.5
              text-sm
              text-white
              outline-none
              placeholder:text-white/25
              transition-all
              duration-300
              focus:border-cyan-300/40
              focus:bg-white/[0.06]
              focus:ring-1
              focus:ring-cyan-300/20
            "
          />
        </div>

        <button
          type="submit"
          className="
            group
            mt-6
            w-full
            rounded-xl
            border
            border-cyan-300/25
            bg-cyan-400/10
            px-6
            py-3.5
            text-sm
            font-semibold
            text-cyan-300
            transition-all
            duration-300
            hover:border-cyan-300/40
            hover:bg-cyan-400/20
            hover:text-white
            hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
          "
        >
          Send Message
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </form>
    </Reveal>
  );
};

export default ContactForm;