import React from "react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function CaseStudies() {
  return (
    <>
      <PageIntro
        aside={["portage direct", "AMO / structuration", "actifs existants"]}
        description={siteContent.casesPage.intro}
        kicker="Réalisations"
        title={siteContent.casesPage.title}
      />

      <section className="content-section">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">{siteContent.caseStudy.place}</p>
            <h2>{siteContent.caseStudy.title}</h2>
            <p>{siteContent.caseStudy.summary}</p>
          </Reveal>
          <div className="case-visual-grid case-visual-grid-top">
            <Reveal
              className="media-card media-card-case-lg"
              style={{ backgroundImage: `url(${siteContent.imagery.gardenHouse})` }}
            />
            <div className="case-visual-stack">
              <Reveal
                className="media-card media-card-case-sm"
                style={{ backgroundImage: `url(${siteContent.imagery.facadeHouse})` }}
              />
              <Reveal
                className="media-card media-card-case-sm"
                style={{ backgroundImage: `url(${siteContent.imagery.heroWindow})` }}
              />
            </div>
          </div>
          <div className="two-grid">
            {siteContent.caseStudy.sections.map((item) => (
              <Reveal className="surface-card" key={item.label}>
                <p className="case-place">{item.label}</p>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-alt">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Autres cadres d’intervention</p>
            <h2>Angles de lecture complémentaires</h2>
          </Reveal>
          <div className="three-grid">
            {siteContent.projects.map((item) => (
              <Reveal className="surface-card project-card" key={item.title}>
                <div
                  className="media-card media-card-project"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <p className="case-place">{item.mode}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
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
