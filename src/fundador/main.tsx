import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrefsProvider } from "../shared/ui";
import Fundador from "./Fundador";
import "../shared/base.css";
import "../home/home.css";
import "./fundador.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrefsProvider page="founder">
      <Fundador />
    </PrefsProvider>
  </StrictMode>,
);
