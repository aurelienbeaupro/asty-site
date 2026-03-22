import React from "react";
import Reveal from "./Reveal";

export default function PageIntro({ kicker, title, description, aside = [] }) {
  return (
    <section className="page-hero page-top-spacing">
      <div className="container page-hero-grid">
        <Reveal className="page-hero-copy">
          <p className="section-kicker">{kicker}</p>
          <h1>{title}</h1>
          <p className="page-hero-body">{description}</p>
        </Reveal>
        {aside.length > 0 ? (
          <Reveal className="page-hero-aside surface-card">
            <ul className="bullet-list">
              {aside.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
