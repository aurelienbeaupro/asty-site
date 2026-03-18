import React from "react";
import { siteContent } from "../data/siteContent";

export default function CaseStudies() {
  return (
    <section className="content-section page-top-spacing">
      <div className="container">
        <div className="narrow">
          <p className="section-kicker">Études de cas</p>
          <h1>Des opérations complexes transformées en trajectoires lisibles</h1>
          <p>
            Cette page présente un cas de requalification type et trois angles de lecture :
            structuration, transformation et valorisation. Les noms et données peuvent être
            adaptés selon les contraintes de confidentialité.
          </p>
        </div>
        <div className="case-visual-grid case-visual-grid-top">
          <div
            className="media-card media-card-case-lg"
            style={{ backgroundImage: `url(${siteContent.imagery.gardenHouse})` }}
          />
          <div className="case-visual-stack">
            <div
              className="media-card media-card-case-sm"
              style={{ backgroundImage: `url(${siteContent.imagery.facadeHouse})` }}
            />
            <div
              className="media-card media-card-case-sm"
              style={{ backgroundImage: `url(${siteContent.imagery.heroWindow})` }}
            />
          </div>
        </div>
        <div className="case-study-list">
          <article className="case-study-item">
            <p className="case-place">Étude type</p>
            <h2>{siteContent.caseStudy.title}</h2>
            <div className="case-study-grid">
              {siteContent.caseStudy.sections.map((item) => (
                <div key={item.label}>
                  <h3>{item.label}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </article>
          {siteContent.projects.items.map((item) => (
            <article className="case-study-item" key={item.title}>
              <p className="case-place">Projet</p>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
