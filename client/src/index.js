import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const helmetContext = {};
root.render(
  <HelmetProvider context={helmetContext}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </HelmetProvider>
);

reportWebVitals();
