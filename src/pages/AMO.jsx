import React from "react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function AMO() {
  return (
    <>
      <PageIntro
        aside={siteContent.amoPage.aside}
        description={siteContent.amoPage.intro}
        kicker="AMO"
        title={siteContent.amoPage.title}
      />

      <section className="content-section">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Ce que nous faisons</p>
            <h2>Une AMO orientée opération</h2>
          </Reveal>
          <div className="two-grid">
            {siteContent.amoPage.whatWeDo.map((item) => (
              <Reveal className="surface-card" key={item.title}>
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
            <p className="section-kicker">Comment nous intervenons</p>
            <h2>Une méthode courte, lisible, actionnable</h2>
          </Reveal>
          <div className="timeline-grid">
            {siteContent.amoPage.howWeIntervene.map((item, index) => (
              <Reveal className="timeline-card" key={item}>
                <p className="phase-step">{`0${index + 1}`}</p>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="two-grid">
            <Reveal className="surface-card">
              <p className="section-kicker">Pour qui</p>
              <h2>Interlocuteurs</h2>
              <ul className="bullet-list">
                {siteContent.amoPage.forWhom.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="surface-card">
              <p className="section-kicker">Types de projets</p>
              <h2>Cadres d’intervention</h2>
              <ul className="bullet-list">
                {siteContent.amoPage.projectTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="section-note narrow">
            <p>{siteContent.amoPage.closing}</p>
          </Reveal>
          <Reveal className="section-actions">
            <Link className="button-primary" to="/contact">
              Demander une mission AMO
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
