const SectionHeading = ({
  label,
  line = false,
  title,
  description,
}) => {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
        {label}
      </p>

      {line && (
        <div className="mx-auto mt-3 h-[2px] w-20 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
      )}

      <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionHeading;