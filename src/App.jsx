import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/etudes-de-cas" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
