import React from "react";

interface props {
  sectionRef: any;
}

const DesignSection: React.FC<props> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} id="DesignSection">
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
    </section>
  );
};

export default DesignSection;
