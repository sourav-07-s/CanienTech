import useReveal from "../hooks/useReveal";

const Reveal = ({ children, delay = 0 }) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transform
        transition-all
        duration-700
        ease-out
        motion-reduce:transform-none
        motion-reduce:transition-none
        motion-reduce:opacity-100
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }
      `}
    >
      {children}
    </div>
  );
};

export default Reveal;