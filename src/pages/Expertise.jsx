import React from "react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function Expertise() {
  return (
    <>
      <PageIntro
        aside={siteContent.expertisePage.aside}
        description={siteContent.expertisePage.intro}
        kicker="Expertise"
        title={siteContent.expertisePage.title}
      />

      <section className="content-section">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Positionnement</p>
            <h2>{siteContent.positioning.title}</h2>
            <p>{siteContent.positioning.intro}</p>
          </Reveal>
          <div className="three-grid">
            {siteContent.positioning.cards.map((item) => (
              <Reveal className="surface-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="surface-card narrow">
            <ul className="bullet-list">
              {siteContent.positioning.issues.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{siteContent.positioning.closing}</p>
          </Reveal>
        </div>
      </section>

      <section className="content-section section-alt">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Modes d’intervention</p>
            <h2>{siteContent.interventionModes.title}</h2>
            <p>{siteContent.interventionModes.intro}</p>
          </Reveal>
          <div className="two-grid">
            {siteContent.interventionModes.items.map((item) => (
              <Reveal className="surface-card surface-card-accent" key={item.title}>
                <p className="case-place">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul className="bullet-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Méthode</p>
            <h2>{siteContent.method.title}</h2>
          </Reveal>
          <div className="timeline-grid">
            {siteContent.method.phases.map((item) => (
              <Reveal className="timeline-card" key={item.step}>
                <p className="phase-step">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-alt">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Ingénierie</p>
            <h2>{siteContent.engineering.title}</h2>
            <p>{siteContent.engineering.intro}</p>
          </Reveal>
          <div className="two-grid">
            {siteContent.engineering.items.map((item) => (
              <Reveal className="surface-card engineering-card" key={item.title}>
                <div className="engineering-head">
                  <span className="badge-square">{item.tag}</span>
                  <h3>{item.title}</h3>
                </div>
                <ul className="bullet-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="section-note narrow">
            <p>{siteContent.engineering.closing}</p>
          </Reveal>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Typologies d’actifs</p>
            <h2>{siteContent.typologies.title}</h2>
            <p>{siteContent.typologies.intro}</p>
          </Reveal>
          <div className="three-grid">
            {siteContent.typologies.items.map((item) => (
              <Reveal className="surface-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-alt">
        <div className="container narrow">
          <Reveal className="section-intro">
            <p className="section-kicker">Partenariats</p>
            <h2>{siteContent.partnerships.title}</h2>
            <p>{siteContent.partnerships.intro}</p>
          </Reveal>
          <Reveal className="surface-card">
            <ul className="bullet-list">
              {siteContent.partnerships.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{siteContent.partnerships.closing}</p>
          </Reveal>
          <Reveal className="section-actions">
            <Link className="button-primary" to="/contact">
              Présenter un actif
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
