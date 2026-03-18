import React from "react";

export default function LogoMark({ compact = false }) {
  return (
    <div className={compact ? "logo-mark compact" : "logo-mark"}>
      <svg
        aria-hidden="true"
        className="logo-icon"
        viewBox="0 0 240 180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M92 16H166L206 56V116H154L118 80H92Z"
          fill="#24492f"
        />
        <path
          d="M42 64H116L156 104H206V146H156L116 112H42Z"
          fill="#d07a3c"
        />
        <path
          d="M42 46H120L158 84H206V126H132L94 88H42Z"
          fill="#c7b26d"
          fillOpacity="0.92"
        />
      </svg>
      <span className="logo-wordmark">ASTY</span>
    </div>
  );
}
