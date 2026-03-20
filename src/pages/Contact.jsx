import React from "react";
import { siteContent } from "../data/siteContent";

export default function Contact() {
  return (
    <section className="content-section page-top-spacing">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h1>{siteContent.contact.title}</h1>
          <p>{siteContent.contact.intro}</p>
          <div className="contact-reassurance">
            <p className="contact-note">{siteContent.contact.privacy}</p>
            <ul className="contact-promise-list">
              {siteContent.contact.reassurance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <form className="contact-form" method="post" action={siteContent.contact.formAction}>
          <div className="contact-form-grid">
            <label>
              Nom / Société
              <input name="name" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Votre profil
              <select name="profile" required defaultValue="">
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                {siteContent.contact.profiles.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Cadre d’intervention recherché
              <select name="interventionMode" required defaultValue="">
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                {siteContent.contact.interventionModes.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Nature de l’actif
              <select name="assetType" required defaultValue="">
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                {siteContent.contact.assetTypes.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="contact-field-full">
              Localisation
              <input name="location" type="text" required />
            </label>
            <label className="contact-field-full">
              Description du projet
              <textarea
                name="description"
                rows="7"
                placeholder="Adresse, état du bien, surface, contraintes identifiées, calendrier souhaité..."
                required
              />
            </label>
          </div>
          <label className="checkbox-row">
            <input name="consent" type="checkbox" required />
            <span>J’accepte le traitement de mes données conformément au RGPD.</span>
          </label>
          <button className="button-primary contact-submit" type="submit">
            Soumettre pour étude
          </button>
          <p className="contact-alt">
            Contact direct : <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          </p>
        </form>
      </div>
    </section>
  );
}
