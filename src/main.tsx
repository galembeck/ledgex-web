import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app.tsx";

import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: required by React 18's createRoot API
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
