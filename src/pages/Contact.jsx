import React from "react";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function Contact() {
  return (
    <section className="content-section page-top-spacing">
      <div className="container contact-layout">
        <Reveal className="contact-copy">
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
          <div className="contact-direct-card">
            <p className="footer-title">Contact direct</p>
            <a className="text-link" href={`mailto:${siteContent.contact.email}`}>
              {siteContent.contact.email}
            </a>
          </div>
        </Reveal>
        <Reveal
          as="form"
          action={siteContent.contact.formAction}
          className="contact-form"
          method="post"
        >
          <div className="contact-form-grid">
            <label>
              Nom
              <input name="name" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Téléphone
              <input name="phone" type="tel" />
            </label>
            <label>
              Type de demande
              <select name="requestType" required defaultValue="">
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                {siteContent.contact.requestTypes.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="contact-field-full">
              Message
              <textarea
                name="message"
                placeholder="Décrivez brièvement l’actif, le besoin ou le cadre d’intervention recherché."
                rows="7"
                required
              />
            </label>
          </div>
          <input name="_subject" type="hidden" value="Nouveau contact ASTY" />
          <label className="checkbox-row">
            <input name="consent" type="checkbox" required />
            <span>J’accepte le traitement de mes données conformément au RGPD.</span>
          </label>
          <button className="button-primary contact-submit" type="submit">
            Envoyer la demande
          </button>
        </Reveal>
      </div>
    </section>
  );
}
