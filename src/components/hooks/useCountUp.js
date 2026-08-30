import { useEffect, useState } from "react";

const useCountUp = (
  end,
  duration = 1500,
  startAnimation = true
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    let animationFrame;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * end
      );

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    };

    animationFrame =
      requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, startAnimation]);

  return count;
};

export default useCountUp;