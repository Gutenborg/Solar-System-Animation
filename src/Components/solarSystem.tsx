import React, { createRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

import Sun from './sun';
import Planet from './planet';

const SolarSystem = () => {
  const container = createRef<HTMLDivElement>();

  useGSAP(() => {
    gsap.fromTo(".planet", { opacity: 0 }, { duration: 1, opacity: 1, stagger: 0.1 });
  }, { scope: container });

  return <div id="solar-system" ref={container} style={{ height: "100vh" }}>
    <Sun />
    <Planet orbitSize={36} orbitSpeed={0.24} planetName="Mercury" planetSize={1.38} />
    <Planet orbitSize={52} orbitSpeed={0.62} planetName="Venus" planetSize={1.95} />
    <Planet orbitSize={66} orbitSpeed={1} planetName="Earth" planetSize={2} />
    <Planet orbitSize={94} orbitSpeed={1.88} planetName="Mars" planetSize={1.53} />
    <Planet orbitSize={163} orbitSpeed={11.86} planetName="Jupiter" planetSize={10.97} />
    <Planet orbitSize={232} orbitSpeed={29.46} planetName="Saturn" planetSize={9.14} />
    <Planet orbitSize={347} orbitSpeed={84.01} planetName="Uranus" planetSize={3.98} />
    <Planet orbitSize={480} orbitSpeed={164.79} planetName="Neptune" planetSize={3.86} />
  </div>
};

export default SolarSystem;
