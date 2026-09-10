import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        pb-28
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.035]
          blur-[130px]
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          gap-8
          lg:grid-cols-[0.8fr_1.2fr]
        "
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
            GET IN TOUCH
          </p>

          <div
            className="
              mt-3
              h-[2px]
              w-16
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_#22d3ee]
            "
          />

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              text-white
              sm:text-4xl
            "
          >
            Tell Us About
            <span className="text-cyan-300">
              {" "}
              Your Project
            </span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-8 text-white/45">
            Whether you&apos;re starting something new or improving an
            existing digital product, we&apos;d love to hear from you.
          </p>

          <div className="mt-8">
            <ContactInfo />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;