import React from "react";
import { siteContent } from "../data/siteContent";

export default function Contact() {
  return (
    <section className="content-section page-top-spacing">
      <div className="container contact-layout">
        <div>
          <p className="section-kicker">Contact</p>
          <h1>{siteContent.contact.title}</h1>
          <p>{siteContent.contact.intro}</p>
          <p className="contact-note">{siteContent.contact.privacy}</p>
        </div>
        <form className="contact-form" method="post" action={siteContent.contact.formAction}>
          <label>
            Nom / Société
            <input name="name" type="text" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Type de projet
            <select name="projectType" required defaultValue="">
              <option value="" disabled>
                Sélectionnez une option
              </option>
              {siteContent.contact.projectTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Localisation
            <input name="location" type="text" required />
          </label>
          <label>
            Description du projet
            <textarea name="description" rows="6" required />
          </label>
          <label className="checkbox-row">
            <input name="consent" type="checkbox" required />
            <span>J’accepte le traitement de mes données conformément au RGPD.</span>
          </label>
          <button className="button-primary" type="submit">
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
