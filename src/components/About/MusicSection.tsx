import React from "react";
import { useTranslation } from "react-i18next";

import img1 from "./../../resources/skills/guitar1.jpg";
import img2 from "./../../resources/skills/guitar2.jpg";
import img3 from "./../../resources/skills/violin.jpeg";

interface props {
  sectionRef: any;
}

const MusicSection: React.FC<props> = ({ sectionRef }) => {

  const { t } = useTranslation();

  return (
    <section ref={sectionRef} id="MusicSection">
      <h1>{t("MusicSection.Title")}</h1>
      <div className="MusicWrapper">
        <div className="MusicLeftBox">
          <div className="imgBox1">
            <img src={img1} alt="guitar #1 ilustration" />
            <h4>
              {t("MusicSection.GImg1.Text")}
            </h4>
          </div>
          <p>
            {t("MusicSection.Text")}
          </p>
          <div className="imgBox2">
            <img src={img2} alt="guitar #2 ilustration" />
            <h4>
              {t("MusicSection.GImg2.Text")}
            </h4>
          </div>
        </div>
        <div className="MusicRightBox">
          <div className="imgBox3">
            <img src={img3} alt="violin ilustration" />
            <h4>
              {t("MusicSection.VImg3.Text")}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
