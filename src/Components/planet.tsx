import React, { createRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface PlanetProps {
  orbitSize: number;
  orbitSpeed: number;
  planetName: string;
  planetSize: number;
}

const Planet: React.FC<PlanetProps> = ({ orbitSize, orbitSpeed, planetName, planetSize }) => {
  const calculatedPlanetSize = planetSize * 2; 
  const container = createRef<SVGSVGElement>();

  useGSAP(() => {
    gsap.to(`#planet-${planetName}`, { duration: orbitSpeed * 4, ease: "linear", motionPath: `#${planetName}`, repeat: -1, transformOrigin: "50%, 50%" });
  }, { scope: container });

  return <svg className="planet" ref={container} viewBox="0 0 1000 1000" style={{height: "100%", position: "fixed", width: "100%" }} version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke="white" strokeWidth="1" id={planetName} d={`M 500, 500 m -${orbitSize}, 0 a ${orbitSize},${orbitSize} 0 1,0 ${orbitSize * 2},0 a ${orbitSize},${orbitSize} 0 1,0 -${orbitSize * 2},0`} />
      <path id={`planet-${planetName}`} fill="white" d={`M 0, 0 m -${calculatedPlanetSize}, 0 a ${calculatedPlanetSize},${calculatedPlanetSize} 0 1,0 ${calculatedPlanetSize * 2},0 a ${calculatedPlanetSize},${calculatedPlanetSize} 0 1,0 -${calculatedPlanetSize * 2},0`} />
    </svg>;
};

export default Planet;
