import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoMark from "./LogoMark";
import { siteContent } from "../data/siteContent";

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand-mark" to="/">
            <LogoMark compact />
          </Link>
          <nav aria-label="Navigation principale">
            <ul className="nav-list">
              {siteContent.navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link nav-link-active" : "nav-link"
                    }
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-title">{siteContent.footer.title}</p>
            <p className="footer-copy">{siteContent.footer.strapline}</p>
            <p className="footer-copy">{siteContent.footer.regions}</p>
          </div>
          <div>
            <p className="footer-title">Contact</p>
            <a className="footer-link" href={`mailto:${siteContent.contact.email}`}>
              {siteContent.contact.email}
            </a>
            <p className="footer-copy">{siteContent.contact.linkedinLabel}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
