const SectionHeading = ({
  label,
  title,
  description,
}) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
        {label}  
      </p>
      
      

      <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-white/45 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;