import React from "react";
import { siteContent } from "../data/siteContent";

const mainCities = new Set(["Bordeaux", "Angoulême"]);

export default function ArtyTerritoryMap() {
  return (
    <div className="territory-shell">
      <div className="territory-copy">
        <p className="section-kicker">Territoire</p>
        <h2>Nouvelle-Aquitaine</h2>
        <p className="territory-body">
          Une lecture territoriale construite autour des centralités urbaines intermédiaires
          et des dynamiques de transformation du bâti existant.
        </p>
        <div className="territory-pills">
          <span className="territory-pill">Base : Bordeaux</span>
          <span className="territory-pill">Base : Angoulême</span>
        </div>
      </div>

      <div className="territory-list-card">
        <p className="territory-list-kicker">Villes d’intervention</p>
        <ul className="territory-list-grid">
          {siteContent.criteriaPage.targetCities.map((city) => (
            <li className="territory-list-item" key={city}>
              <span className="territory-list-dot" />
              <span className="territory-list-text">{city}</span>
              {mainCities.has(city) ? (
                <span className="territory-list-badge">Base</span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
