import React from "react";

interface props {
  sectionRef: any;
}

const MusicSection: React.FC<props> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} id="MusicSection">
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
      <div className="fillerdivs"></div>
    </section>
  );
};

export default MusicSection;
