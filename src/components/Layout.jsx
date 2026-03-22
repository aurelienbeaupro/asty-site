import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoMark from "./LogoMark";
import { siteContent } from "../data/siteContent";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand-mark" to="/">
            <LogoMark compact />
          </Link>
          <button
            aria-expanded={menuOpen}
            aria-label="Ouvrir la navigation"
            className="nav-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`header-nav-shell${menuOpen ? " header-nav-shell-open" : ""}`}>
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
            <Link className="button-primary header-cta" to={siteContent.headerCta.to}>
              {siteContent.headerCta.label}
            </Link>
          </div>
        </div>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-title">{siteContent.footer.title}</p>
            <p className="footer-copy">{siteContent.footer.strapline}</p>
            <p className="footer-copy">{siteContent.footer.regions}</p>
            <p className="footer-copy footer-note">{siteContent.footer.note}</p>
          </div>
          <div>
            <p className="footer-title">Navigation</p>
            <div className="footer-link-stack">
              {siteContent.navigation.map((item) => (
                <Link className="footer-link" key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-title">Contact</p>
            <a className="footer-link" href={`mailto:${siteContent.contact.email}`}>
              {siteContent.contact.email}
            </a>
            <Link className="footer-link" to="/contact">
              Présenter un actif
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
