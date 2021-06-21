import React from "react";

interface props {
  sectionRef: any;
}

const WhySection: React.FC<props> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} id="WhySection">
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
    </section>
  );
};

export default WhySection;
