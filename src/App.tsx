import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import SolarSystem from './Components/solarSystem';
import Spacer from "./Components/spacer";

function App() {
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to("#solar-system", {
      opacity: 0,
      scrollTrigger: {
        end: "bottom bottom",
        scrub: 2,
        start: "top bottom",
        trigger: "#solar-system-spacer"
      }
    });

    timeline.fromTo("#thank-you-message", {
      opacity: 0,
      scale: 4,
      y: -250,
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      scrollTrigger: {
        end: "bottom bottom",
        scrub: 1,
        start: "top center",
        trigger: "#thank-you-message-container"
      }
    });
  });

  return (
    <main id="main-container">
      <SolarSystem />

      <Spacer id="solar-system-spacer" size={2000} />

      <div id="thank-you-message-container" style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100vh" }}>
        <h1 id="thank-you-message">Thanks for Checking Out My Solar System Animation!</h1>
      </div>
    </main>
  );
}

export default App;
