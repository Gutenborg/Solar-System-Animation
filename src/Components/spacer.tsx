import React from "react";

interface SpacerProps {
  id: string;
  size: number;
}

const Spacer: React.FC<SpacerProps> = ({ id, size }) => {

  return <div id={id} style={{ height: `${size}px`}} />;
};

export default Spacer;
