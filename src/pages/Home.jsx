import React from "react";
import { Link } from "react-router-dom";
import LogoMark from "../components/LogoMark";
import { siteContent } from "../data/siteContent";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
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
          </div>
          <div className="hero-panel" aria-hidden="true">
            <div className="hero-panel-card">
              <div
                className="media-card media-card-tall"
                style={{ backgroundImage: `url(${siteContent.imagery.heroWindow})` }}
              />
              <div className="hero-panel-note">
                <LogoMark />
                {siteContent.hero.panelItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="manifeste">
        <div className="container manifesto-grid">
          <div className="narrow">
            <p className="section-kicker">Manifeste</p>
            <h2>{siteContent.manifesto.title}</h2>
            <p>{siteContent.manifesto.intro}</p>
          </div>
          <div className="manifesto-card">
            <div
              className="media-card media-card-wide"
              style={{ backgroundImage: `url(${siteContent.imagery.facadeHouse})` }}
            />
            <ul className="bullet-list">
              {siteContent.manifesto.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{siteContent.manifesto.closing}</p>
          </div>
        </div>
      </section>

      <section className="metric-section">
        <div className="container metric-grid">
          {siteContent.metrics.map((item) => (
            <article className="metric-card" key={item.label}>
              <p className="metric-value">{item.value}</p>
              <p className="metric-label">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="container narrow">
          <p className="section-kicker">Positionnement</p>
          <h2>{siteContent.positioning.title}</h2>
          <p>{siteContent.positioning.intro}</p>
          <ul className="bullet-list">
            {siteContent.positioning.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{siteContent.positioning.closing}</p>
        </div>
      </section>

      <section className="content-section content-section-alt" id="intervention">
        <div className="container">
          <p className="section-kicker">Modes d’intervention</p>
          <h2>{siteContent.interventionModes.title}</h2>
          <p>{siteContent.interventionModes.intro}</p>
          <div className="card-grid">
            {siteContent.interventionModes.items.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p>{siteContent.interventionModes.closing}</p>
        </div>
      </section>

      <section className="content-section content-section-alt" id="methode">
        <div className="container">
          <p className="section-kicker">Méthode</p>
          <h2>{siteContent.method.title}</h2>
          <div className="card-grid">
            {siteContent.method.phases.map((item) => (
              <article className="info-card" key={item.step}>
                <p className="phase-step">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <p className="section-kicker">Ingénierie</p>
          <h2>{siteContent.engineering.title}</h2>
          <p>{siteContent.engineering.intro}</p>
          <ul className="bullet-list bullet-list-columns">
            {siteContent.engineering.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{siteContent.engineering.closing}</p>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container narrow">
          <p className="section-kicker">Typologies d’actifs</p>
          <h2>{siteContent.assetTypes.title}</h2>
          <ul className="bullet-list">
            {siteContent.assetTypes.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">Projets</p>
              <h2>{siteContent.projects.title}</h2>
            </div>
            <Link className="text-link" to="/etudes-de-cas">
              Voir les études de cas
            </Link>
          </div>
          <div className="card-grid">
            {siteContent.projects.items.map((item) => (
              <article className="case-card" key={item.title}>
                <div
                  className="media-card media-card-project"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <p className="case-place">{item.mode}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <p className="section-kicker">Étude de cas</p>
          <h2>{siteContent.caseStudy.title}</h2>
          <div className="case-visual-grid">
            <div
              className="media-card media-card-case"
              style={{ backgroundImage: `url(${siteContent.imagery.interiorKitchen})` }}
            />
            <div
              className="media-card media-card-case"
              style={{ backgroundImage: `url(${siteContent.imagery.interiorBath})` }}
            />
          </div>
          <div className="card-grid">
            {siteContent.caseStudy.sections.map((item) => (
              <article className="info-card" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container narrow">
          <p className="section-kicker">Partenariats</p>
          <h2>{siteContent.partnerships.title}</h2>
          <p>{siteContent.partnerships.intro}</p>
          <ul className="bullet-list">
            {siteContent.partnerships.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{siteContent.partnerships.closing}</p>
        </div>
      </section>
    </>
  );
}
