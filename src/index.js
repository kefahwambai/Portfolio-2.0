import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.render(
  <React.StrictMode>
    <Analytics/>
    <SpeedInsights/>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
