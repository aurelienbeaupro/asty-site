import React from "react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

const assetUrl = (path) => encodeURI(path);

export default function CaseStudies() {
  return (
    <>
      <PageIntro
        aside={siteContent.casesPage.aside}
        description={siteContent.casesPage.intro}
        kicker="Réalisations"
        title={siteContent.casesPage.title}
      />

      <section className="content-section">
        <div className="container">
          <Reveal className="section-intro section-intro-wide">
            <p className="section-kicker">Références sélectionnées</p>
            <h2>Cinq réalisations pour lire le positionnement ASTY</h2>
            <p>{siteContent.casesPage.note}</p>
          </Reveal>

          <div className="references-stack">
            {siteContent.casesPage.references.map((item) => (
              <Reveal as="article" className="surface-card reference-showcase" key={item.reference}>
                <div className="reference-head">
                  <div>
                    <p className="case-place">{item.reference}</p>
                    <p className="reference-eyebrow">{item.eyebrow}</p>
                    <h2>{item.title}</h2>
                  </div>
                  <p className="reference-summary">{item.summary}</p>
                </div>

                <ul className="reference-ledger">
                  {item.scopes.map((scope) => (
                    <li className="reference-ledger-item" key={scope}>
                      {scope}
                    </li>
                  ))}
                </ul>

                <div className="reference-media-grid">
                  <figure className="reference-primary-media">
                    <img
                      alt={`${item.title} - visuel principal`}
                      className="reference-image"
                      src={assetUrl(item.cover)}
                    />
                  </figure>

                  <div className="reference-support-column">
                    {item.compare ? (
                      <div className="reference-compare-card">
                        <div className="reference-compare-grid">
                          <figure className="reference-figure">
                            <figcaption>{item.compare.beforeLabel}</figcaption>
                            <div className="reference-media-frame">
                              <img
                                alt={`${item.title} - ${item.compare.beforeLabel}`}
                                className="reference-image"
                                src={assetUrl(item.compare.before)}
                              />
                            </div>
                          </figure>

                          <figure className="reference-figure">
                            <figcaption>{item.compare.afterLabel}</figcaption>
                            <div className="reference-media-frame">
                              <img
                                alt={`${item.title} - ${item.compare.afterLabel}`}
                                className="reference-image"
                                src={assetUrl(item.compare.after)}
                              />
                            </div>
                          </figure>
                        </div>
                      </div>
                    ) : null}

                    {item.gallery?.length ? (
                      <div
                        className={`reference-gallery-grid reference-gallery-grid-${Math.min(
                          item.gallery.length,
                          3,
                        )}`}
                      >
                        {item.gallery.map((image, index) => (
                          <figure className="reference-gallery-card" key={image}>
                            <div className="reference-media-frame">
                              <img
                                alt={`${item.title} - vue complémentaire ${index + 1}`}
                                className="reference-image"
                                src={assetUrl(image)}
                              />
                            </div>
                          </figure>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="reference-detail-grid">
                  {item.details.map((detail) => (
                    <div className="reference-detail" key={detail.title}>
                      <h3>{detail.title}</h3>
                      <p>{detail.body}</p>
                    </div>
                  ))}
                </div>
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
