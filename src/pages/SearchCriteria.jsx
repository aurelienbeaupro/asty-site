import React from "react";
import { Link } from "react-router-dom";
import ArtyTerritoryMap from "../components/ArtyTerritoryMap";
import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function SearchCriteria() {
  return (
    <>
      <PageIntro
        aside={["200 à 1 000 m²", "centre-ville", "vacance ou complexité"]}
        description={siteContent.criteriaPage.intro}
        kicker="Critères de recherche"
        title={siteContent.criteriaPage.title}
      />

      <section className="content-section">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Ce que nous recherchons</p>
            <h2>Des dossiers lisibles dans leur complexité</h2>
          </Reveal>
          <div className="two-grid">
            {siteContent.criteriaPage.focus.map((item) => (
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
          <Reveal>
            <ArtyTerritoryMap />
          </Reveal>
        </div>
      </section>

      <section className="content-section" id="projets">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Complexité recherchée</p>
            <h2>Vacance, transformation, repositionnement</h2>
          </Reveal>
          <Reveal className="surface-card narrow">
            <ul className="bullet-list bullet-list-columns">
              {siteContent.criteriaPage.complexity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{siteContent.criteriaPage.note}</p>
          </Reveal>
        </div>
      </section>

      <section className="content-section section-alt">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Ce que nous ne faisons pas</p>
            <h2>Un cadre de sélection assumé</h2>
          </Reveal>
          <div className="two-grid">
            {siteContent.criteriaPage.exclusions.map((item) => (
              <Reveal className="surface-card exclusion-card" key={item}>
                <p>{item}</p>
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
