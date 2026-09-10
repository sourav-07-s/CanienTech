const SectionHeading = ({
  label,
  line = false,
  title,
  description,
  align = "center",
}) => {
  const alignment =
    align === "left"
      ? "text-left"
      : "mx-auto text-center";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p
        className="
          text-xs
          font-medium
          uppercase
          tracking-[0.3em]
          text-cyan-300
          sm:text-sm
        "
      >
        {label}
      </p>

      {line && (
        <div
          className={`
            mt-4
            h-[2px]
            w-20
            rounded-full
            bg-cyan-300
            shadow-[0_0_12px_#22d3ee]
            ${align === "left" ? "" : "mx-auto"}
          `}
        />
      )}

      <h2
        className="
          mt-5
          text-3xl
          font-bold
          leading-tight
          text-white
          sm:text-4xl
          md:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className={`
            mt-5
            text-base
            leading-8
            text-white/45
            sm:text-lg
            ${align === "left" ? "max-w-2xl" : "mx-auto max-w-2xl"}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;