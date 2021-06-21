import React from "react";

interface props {
  sectionRef: any;
}

const XpSection: React.FC<props> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} id="XpSection">
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
    </section>
  );
};

export default XpSection;
