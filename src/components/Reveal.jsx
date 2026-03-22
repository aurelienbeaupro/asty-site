import React, { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={elementRef}
      className={`${className} reveal${isVisible ? " reveal-visible" : ""}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
