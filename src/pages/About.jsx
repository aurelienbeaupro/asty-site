import React from "react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function About() {
  return (
    <>
      <PageIntro
        aside={["structure indépendante", "sélectivité", "Nouvelle-Aquitaine"]}
        description={siteContent.aboutPage.intro}
        kicker="À propos"
        title={siteContent.aboutPage.title}
      />

      <section className="content-section">
        <div className="container manifesto-grid">
          <Reveal className="narrow">
            <p className="section-kicker">Conviction</p>
            <h2>{siteContent.aboutPage.convictionsTitle}</h2>
            <p>{siteContent.aboutPage.convictionsIntro}</p>
          </Reveal>
          <Reveal className="surface-card">
            <div
              className="media-card media-card-wide"
              style={{ backgroundImage: `url(${siteContent.imagery.facadeHouse})` }}
            />
            <ul className="bullet-list">
              {siteContent.aboutPage.convictions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="content-section section-alt">
        <div className="container">
          <Reveal className="section-intro">
            <p className="section-kicker">Ce qui distingue ASTY</p>
            <h2>Un cadre de travail clair</h2>
          </Reveal>
          <div className="three-grid">
            {siteContent.aboutPage.distinctions.map((item) => (
              <Reveal className="surface-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container two-grid">
          <Reveal className="surface-card">
            <p className="section-kicker">Territoire</p>
            <h2>{siteContent.aboutPage.territoryTitle}</h2>
            <p>{siteContent.aboutPage.territoryBody}</p>
          </Reveal>
          <Reveal className="surface-card">
            <p className="section-kicker">Partenariats</p>
            <h2>{siteContent.partnerships.title}</h2>
            <p>{siteContent.partnerships.intro}</p>
            <ul className="bullet-list">
              {siteContent.partnerships.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{siteContent.partnerships.closing}</p>
          </Reveal>
        </div>
        <Reveal className="section-actions">
          <Link className="button-primary" to="/contact">
            Initier un échange
          </Link>
        </Reveal>
      </section>
    </>
  );
}
