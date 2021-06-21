import React from "react";

interface props {
  sectionRef: any;
}

const LangSection: React.FC<props> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} id="LangSection">
      <div className="langSelector">
        <span className="sp">
          <h2>Español</h2>
          <div className="bgImg"></div>
        </span>
        <span className="en">
          <h2>English</h2>
          <div className="bgImg"></div>
        </span>
        <span className="ge">
          <h2>Alemán</h2>
          <div className="bgImg"></div>
        </span>
      </div>
      <div className="landDisplay">
        <div className="imgBox"></div>
        <div className="texBox">
          <p className="enText"></p>
          <p className="spText"></p>
          <p className="geText"></p>
        </div>
      </div>
    </section>
  );
};

export default LangSection;
