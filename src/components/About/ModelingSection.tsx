import React from "react";

interface props {
  sectionRef: any;
}

const ModelingSection: React.FC<props> = ({ sectionRef }) => {
  return (
    <section id="ModelingSection" ref={sectionRef}>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
    </section>
  );
};

export default ModelingSection;
