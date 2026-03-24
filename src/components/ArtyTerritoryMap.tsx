import React, { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/siteContent";

export default function ArtyTerritoryMap() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const preferredCities = ["Angoulême", "Cognac", "Poitiers", "Limoges"];
  const metroCities = ["Bordeaux Métropole"];
  const secondaryCities = siteContent.criteriaPage.targetCities.filter(
    (city) => !preferredCities.includes(city) && city !== "Bordeaux",
  );
  const cityGroups = [
    {
      title: "Zone de prédilection",
      cities: preferredCities,
      variant: "priority",
    },
    {
      title: "Périmètre Bordeaux Métropole",
      cities: metroCities,
      variant: "metro",
    },
    {
      title: "Présence élargie",
      cities: secondaryCities,
      variant: "secondary",
    },
  ];
  let animationIndex = 0;

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.22,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`territory-shell${isVisible ? " territory-shell-visible" : ""}`}
    >
      <div className="territory-copy">
        <p className="section-kicker">Territoire</p>
        <h2>Nouvelle-Aquitaine</h2>
        <p className="territory-body">
          Une lecture territoriale construite autour des centralités urbaines intermédiaires
          et des dynamiques de transformation du bâti existant.
        </p>
        <p className="territory-implantations">Implantations : Bordeaux et Angoulême</p>
      </div>

      <div className="territory-list-panel">
        <p className="territory-list-kicker">Villes d’intervention</p>
        <div className="territory-group-stack">
          {cityGroups.map((group) => (
            <section
              className={`territory-group territory-group-${group.variant}`}
              key={group.title}
            >
              <p className="territory-group-title">{group.title}</p>
              <ul className="territory-list-grid">
                {group.cities.map((city) => {
                  const delay = `${animationIndex * 90}ms`;
                  animationIndex += 1;

                  return (
                    <li
                      className={`territory-list-item territory-list-item-${group.variant}`}
                      key={city}
                      style={{ "--city-delay": delay }}
                    >
                      <span className="territory-list-text">{city}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
