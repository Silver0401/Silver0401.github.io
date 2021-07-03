import React from "react";
import smortLogo from "./../../resources/Icons/SmortLogo.png";
import meryLogo from "./../../resources/Icons/meryLogo.png";
import voadesLogo from "./../../resources/Icons/voadesLogo.png";
import preventisLogo from "./../../resources/Icons/preventisLogo.png";
import templateBg from "./../../resources/Carneros/carneros1.jpg";

interface props {
  sectionRef: any;
}

const CreateProyectDisplay = (
  proyectTitle: string,
  proyectDescription: string,
  proyectLogo: string,
  BgImg: string,
  liveLink: string,
  sourceLink: string
) => {
  return (
    <div className="proyectBox">
      <h2>{proyectTitle}</h2>
      <div className="logoContainer">
        <img id="LogoImg" src={proyectLogo} alt="Logo ilustration" />
      </div>
      <div className="buttonsBox">
        <button onClick={() => window.open(liveLink, "_newtab")}>
          <p>Live</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M.696 8c1.649-4.66 6.08-8 11.304-8 6.627 0 12 5.373 12 12 0 .683-.07 1.348-.18 2h-1.523c-1.137 0-1.316-.507-1.932-2.461-.445-1.414-1.184-3.551-2.811-3.551-1.656 0-2.297 2.215-2.893 4.006-.325.973-.521 1.561-.812 1.561-.279 0-.411-.588-.74-1.563-.616-1.822-1.319-4.003-2.965-4.003-1.705 0-2.436 2.387-2.925 3.908-.354 1.105-.466 1.659-.78 1.659-.267 0-.352-.449-.66-1.344-.701-2.041-.925-4.212-4.06-4.212h-1.023zm21.458 8c-2.297 0-2.845-1.101-3.703-3.563-.531-1.528-.588-2.074-.896-2.074-.301 0-.387.627-.979 2.312-.519 1.475-1.231 3.311-2.727 3.311-1.664 0-2.371-2.225-2.983-4.076-.339-1.024-.425-1.491-.722-1.491-.275 0-.35.42-.696 1.436-.636 1.872-1.341 4.132-3.009 4.132-1.646 0-2.399-2.223-2.809-3.551-.605-1.965-.712-2.436-1.811-2.436h-1.639c-.11.652-.18 1.317-.18 2 0 6.627 5.373 12 12 12 5.223 0 9.653-3.342 11.303-8h-1.149z" />
          </svg>
        </button>
        <button onClick={() => window.open(sourceLink, "_newtab")}>
          <p>Source</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </button>
      </div>
      <p className="proyectDescription">{proyectDescription}</p>
      <img id="BgImg" src={BgImg} alt="Bg ilustration" />
    </div>
  );
};

const DesignSection: React.FC<props> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} id="DesignSection">
      <h1>Personal Proyects</h1>
      <div className="proyectsBox">
        {CreateProyectDisplay(
          "Smort tech",
          "Smort technology is a website constructed with the purpose of designing and selling personalized websites",
          smortLogo,
          templateBg,
          "https://amazing-liskov-6ef20f.netlify.app",
          "https://github.com/Silver0401/smort-ws"
        )}
        {CreateProyectDisplay(
          "PC-Calc",
          "This is a proyect made with a medical approach, it's purpose is to work as a web tool for prostate cancer risk detection",
          preventisLogo,
          templateBg,
          "https://sharp-bell-56ec63.netlify.app",
          "https://github.com/Silver0401/pc-calc"
        )}
        {CreateProyectDisplay(
          "Voades-mx",
          "My First ever sold website, designed for a mexican non-profitable organization that focuses on mental health problems",
          voadesLogo,
          templateBg,
          "https://romantic-hodgkin-a1033b.netlify.app",
          "https://github.com/Silver0401/voades"
        )}
        {CreateProyectDisplay(
          "Mery AI",
          "Mery is a web based speech recognition assistant that responds to certain personalized commands in order to control my computer",
          meryLogo,
          templateBg,
          "https://quizzical-wilson-2ae07d.netlify.app",
          "https://github.com/Silver0401/JS-MeryAI"
        )}
      </div>
    </section>
  );
};

export default DesignSection;
