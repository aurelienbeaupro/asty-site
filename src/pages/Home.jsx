import React from "react";
import { Link } from "react-router-dom";
import CounterStat from "../components/CounterStat";
import LogoMark from "../components/LogoMark";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <Reveal className="hero-copy-block">
            <p className="eyebrow">ASTY</p>
            <h1>{siteContent.hero.title}</h1>
            <p className="hero-copy">{siteContent.hero.description}</p>
            <p className="hero-detail">{siteContent.hero.detail}</p>
            <div className="hero-actions">
              <a className="button-primary" href={siteContent.hero.primaryCta.href}>
                {siteContent.hero.primaryCta.label}
              </a>
              <Link className="button-secondary" to={siteContent.hero.secondaryCta.href}>
                {siteContent.hero.secondaryCta.label}
              </Link>
            </div>
          </Reveal>
          <Reveal className="hero-panel">
            <div className="hero-panel-card">
              <div
                className="media-card media-card-tall"
                style={{ backgroundImage: `url(${siteContent.imagery.heroWindow})` }}
              />
              <div className="hero-panel-note">
                <LogoMark compact />
                {siteContent.hero.panelItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Reveal className="section-intro section-intro-wide">
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
          <Reveal className="section-note narrow">
            <p>{siteContent.positioning.closing}</p>
          </Reveal>
        </div>
      </section>

      <section className="content-section section-alt" id="intervention">
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
          <Reveal className="section-note narrow">
            <p>{siteContent.interventionModes.closing}</p>
          </Reveal>
        </div>
      </section>

      <section className="metric-section">
        <div className="container">
          <Reveal className="section-intro section-intro-light">
            <p className="section-kicker section-kicker-light">Chiffres clés</p>
            <h2>Une expérience ancrée dans le réel</h2>
          </Reveal>
          <div className="metrics-grid">
            {siteContent.metrics.map((item) => (
              <Reveal key={item.label}>
                <CounterStat
                  label={item.label}
                  note={item.note}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  text={item.text}
                  value={item.value}
                />
              </Reveal>
            ))}
          </div>
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

      <section className="content-section section-alt" id="methode">
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

      <section className="content-section">
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
          <Reveal className="cta-panel">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>{siteContent.cta.title}</h2>
              <p>{siteContent.cta.body}</p>
            </div>
            <div className="cta-actions">
              <Link className="button-primary" to={siteContent.cta.primary.to}>
                {siteContent.cta.primary.label}
              </Link>
              <Link className="button-secondary" to={siteContent.cta.secondary.to}>
                {siteContent.cta.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
