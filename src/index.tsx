import React from 'react';
import ReactDOM from 'react-dom/client';
import gsap from "gsap";

import App from './App';
import "./index.css";
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
