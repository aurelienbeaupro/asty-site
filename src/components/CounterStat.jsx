import React, { useEffect, useRef, useState } from "react";

function formatDisplay(value, prefix = "", suffix = "") {
  return `${prefix}${value}${suffix}`;
}

export default function CounterStat({
  value,
  prefix = "",
  suffix = "",
  text,
  label,
  note,
}) {
  const elementRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const isNumeric = typeof value === "number";

  useEffect(() => {
    if (!isNumeric) {
      return undefined;
    }

    const node = elementRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isNumeric]);

  useEffect(() => {
    if (!isNumeric || !hasStarted) {
      return undefined;
    }

    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const nextValue = Math.round(value * progress);
      setDisplayValue(nextValue);

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    }

    const frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [hasStarted, isNumeric, value]);

  return (
    <div ref={elementRef} className="metric-panel">
      <p className={`metric-value${!isNumeric ? " metric-value-text" : ""}`}>
        {isNumeric ? formatDisplay(displayValue, prefix, suffix) : text}
      </p>
      <p className="metric-label">{label}</p>
      {note ? <p className="metric-note">{note}</p> : null}
    </div>
  );
}
