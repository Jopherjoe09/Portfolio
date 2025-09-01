"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

export function ScrollAnimationReveal({
  children,
  delay = 0,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 } // 20% in view
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        "transition-all duration-700 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {children}
    </div>
  );
}
