import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/site.css";

const application = (
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const root = document.getElementById("root");
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, application);
else ReactDOM.createRoot(root).render(application);
