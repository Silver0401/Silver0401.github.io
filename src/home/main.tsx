import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrefsProvider } from "../shared/ui";
import Home from "./Home";
import "../shared/base.css";
import "./home.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrefsProvider page="home">
      <Home />
    </PrefsProvider>
  </StrictMode>,
);
