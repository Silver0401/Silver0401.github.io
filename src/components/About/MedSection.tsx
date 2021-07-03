import React from "react";
import useLottie from "lottie-react";
import medLottieAnim from "./../../resources/Med/medLottie.json";

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
  return (
    <section ref={sectionRef} id="MedSection">
      {/* <div className="bigBgCircle" /> */}

      <div className="TextSection">
        <h1>Medicine Knowledge</h1>
        <p>
          I am currently in med school, and so far, I have basic to intermediate
          knoledge in the next fields
        </p>
      </div>

      <div className="medDataBox">
        <div className="medSubjects">
          <span className="cardio">
            <h2>Cardiología</h2>
            <img alt="bgSubject" src={cardioPic} />
          </span>
          <span className="biocel">
            <h2>Biología Celular</h2>
            <img alt="bgSubject" src={biocelPic} />
          </span>
          <span className="genetica">
            <h2>Genética</h2>
            <img alt="bgSubject" src={geneticaPic} />
          </span>
          <span className="endocrino">
            <h2>Endocrinología</h2>
            <img alt="bgSubject" src={endocrinoPic} />
          </span>
          <span className="inmuno">
            <h2>Inmunología</h2>
            <img alt="bgSubject" src={inmunoPic} />
          </span>
          <span className="neuro">
            <h2>Neurología</h2>
            <img alt="bgSubject" src={neuroPic} />
          </span>
          <span className="histo">
            <h2>Histología</h2>
            <img alt="bgSubject" src={histoPic} />
          </span>
          <span className="nefro">
            <h2>Nefrología</h2>
            <img alt="bgSubject" src={nefroPic} />
          </span>
          <span className="digestivo">
            <h2>Gastroenterología</h2>
            <img alt="bgSubject" src={gastoPic} />
          </span>
          <span className="micro">
            <h2>Microorganismos</h2>
            <img alt="bgSubject" src={microPic} />
          </span>
          <span className="embrio">
            <h2>Embriología</h2>
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
            Link to my Notes 📔{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MedSection;
