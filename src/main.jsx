import React from "react";
import { createRoot } from "react-dom/client";
import LucriAbogadosLandingPage from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LucriAbogadosLandingPage />
  </React.StrictMode>
);
