
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = 0;
    const changeInValue = end - startValue;
    
    const countUp = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      
      if (elapsedTime < duration) {
        const value = easeOutQuad(elapsedTime, startValue, changeInValue, duration);
        countRef.current = Math.floor(value);
        setCount(countRef.current);
        timerRef.current = requestAnimationFrame(countUp);
      } else {
        countRef.current = end;
        setCount(end);
      }
    };
    
    timerRef.current = requestAnimationFrame(countUp);
    
    return () => {
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current);
      }
    };
  }, [end, duration]);
  
  // Easing function for smoother animation
  const easeOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d;
    return -c * t * (t - 2) + b;
  };

  return (
    <span className={`tabular-nums font-bold transition-all ${className}`}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
