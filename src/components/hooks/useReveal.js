import { useEffect, useRef, useState } from "react";

const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
};

export default useReveal;