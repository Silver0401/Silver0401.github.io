import React from "react";
import useLottie from "lottie-react";
import medLottieAnim from "./../../resources/Med/medLottie.json";
import { useTranslation } from "react-i18next";

// Photos
import cardioPic from "./../../resources/Med/cardio.jpeg";
import embrioPic from "./../../resources/Med/embrio.jpeg";
import biocelPic from "./../../resources/Med/biocel.jpeg";
import endocrinoPic from "./../../resources/Med/endocrino.jpeg";
import gastoPic from "./../../resources/Med/gasto.jpeg";
import geneticaPic from "./../../resources/Med/genetica.jpeg";
import histoPic from "./../../resources/Med/histo.jpeg";
import inmunoPic from "./../../resources/Med/inmuno.jpeg";
import microPic from "./../../resources/Med/micro.jpeg";
import nefroPic from "./../../resources/Med/nefro.jpeg";
import neuroPic from "./../../resources/Med/neuro.jpeg";

interface props {
  sectionRef: any;
}

const LottieAnimation = () => {
  const options = {
    animationData: medLottieAnim,
    loop: true,
    autoplay: true,
  };

  const View = useLottie(options);

  return View;
};

const MedSection: React.FC<props> = ({ sectionRef }) => {

  const { t } = useTranslation();

  return (
    <section ref={sectionRef} id="MedSection">
      {/* <div className="bigBgCircle" /> */}

      <div className="TextSection">
        <h1>{t("MedSection.Title")}</h1>
        <p>
          {t("MedSection.Text")}
        </p>
      </div>

      <div className="medDataBox">
        <div className="medSubjects">
          <span className="cardio">
            <h2>{t("MedSection.Box.Cardio")}</h2>
            <img alt="bgSubject" src={cardioPic} />
          </span>
          <span className="biocel">
            <h2>{t("MedSection.Box.BCel")}</h2>
            <img alt="bgSubject" src={biocelPic} />
          </span>
          <span className="genetica">
            <h2>{t("MedSection.Box.Genetics")}</h2>
            <img alt="bgSubject" src={geneticaPic} />
          </span>
          <span className="endocrino">
            <h2>{t("MedSection.Box.Endocrine")}</h2>
            <img alt="bgSubject" src={endocrinoPic} />
          </span>
          <span className="inmuno">
            <h2>{t("MedSection.Box.Imuno")}</h2>
            <img alt="bgSubject" src={inmunoPic} />
          </span>
          <span className="neuro">
            <h2>{t("MedSection.Box.Neuro")}</h2>
            <img alt="bgSubject" src={neuroPic} />
          </span>
          <span className="histo">
            <h2>{t("MedSection.Box.Histo")}</h2>
            <img alt="bgSubject" src={histoPic} />
          </span>
          <span className="nefro">
            <h2>{t("MedSection.Box.Nefro")}</h2>
            <img alt="bgSubject" src={nefroPic} />
          </span>
          <span className="digestivo">
            <h2>{t("MedSection.Box.Gastro")}</h2>
            <img alt="bgSubject" src={gastoPic} />
          </span>
          <span className="micro">
            <h2>{t("MedSection.Box.Micro")}</h2>
            <img alt="bgSubject" src={microPic} />
          </span>
          <span className="embrio">
            <h2>{t("MedSection.Box.Embrio")}</h2>
            <img alt="bgSubject" src={embrioPic} />
          </span>
        </div>

        <div className="medLinkBox">
          <div className="lottieNotesAnim">
            <LottieAnimation />
          </div>
          <button
            onClick={() =>
              window.open(
                "https://1drv.ms/u/s!AvzR2WZ4Hf2egnG3zTGvIcbw_mIj",
                "_newtab"
              )
            }
            className="linkNotes"
          >
            {t("MedSection.Button")} 📔{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MedSection;
