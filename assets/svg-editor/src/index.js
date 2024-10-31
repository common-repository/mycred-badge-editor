import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'normalize.css';
import './index.scss';
import './utils/browserSupport.js';
import './utils/preloadFonts.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);