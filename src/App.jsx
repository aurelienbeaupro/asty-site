import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import AMO from "./pages/AMO";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Expertise from "./pages/Expertise";
import Home from "./pages/Home";
import SearchCriteria from "./pages/SearchCriteria";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/criteres-de-recherche" element={<SearchCriteria />} />
        <Route path="/amo" element={<AMO />} />
        <Route path="/realisations" element={<CaseStudies />} />
        <Route path="/etudes-de-cas" element={<Navigate replace to="/realisations" />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}
