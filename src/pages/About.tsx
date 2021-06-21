import React, { useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChosenDataContext } from "../components/ChosenData";

import InitSection from "./../components/About/InitSection";
import CodeSection from "./../components/About/CodeSection";
import MedSection from "./../components/About/MedSection";
import XpSection from "./../components/About/XpSection";
import ModelingSection from "./../components/About/ModelingSection";
import DesignSection from "./../components/About/DesignSection";
import MusicSection from "./../components/About/MusicSection";
import LangSection from "./../components/About/LangSection";
import WhySection from "./../components/About/WhySection";

export const About: React.FC = () => {
  const [transversalData, setTransversalData] = useContext(ChosenDataContext);

  const InitRef = useRef(null);
  const CodeRef = useRef(null);
  const MedRef = useRef(null);
  const XpRef = useRef(null);
  const LangRef = useRef(null);
  const MusicRef = useRef(null);
  const WhyRef = useRef(null);
  const ModelingRef = useRef(null);
  const DesignRef = useRef(null);

  const MotionTransitionVariants = {
    initPosition: {
      opacity: 0,
      transform: transversalData.KnowMeButtonClicked
        ? "translateX(0%)"
        : "translateX(-100%)",
      transition: {
        duration: transversalData.KnowMeButtonClicked ? 0.5 : 1,
      },
    },
    DesiredPosition: {
      opacity: 1,
      transform: "translateX(0%)",
      transition: {
        duration: 1,
      },
    },
    ExitPosition: {
      opacity: 0,
      transform: "translateY(100%)",
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    let chosenVariable: any;

    switch (transversalData.section) {
      case "MedSection":
        chosenVariable = MedRef;
        break;
      case "CodeSection":
        chosenVariable = CodeRef;
        break;
      case "XpSection":
        chosenVariable = XpRef;
        break;
      case "ModelingSection":
        chosenVariable = ModelingRef;
        break;
      case "DesignSection":
        chosenVariable = DesignRef;
        break;
      case "WhySection":
        chosenVariable = WhyRef;
        break;
      case "MusicSection":
        chosenVariable = MusicRef;
        break;
      case "LangSection":
        chosenVariable = LangRef;
        break;
      default:
        chosenVariable = InitRef;
        break;
    }

    console.log(`scrolling into ${transversalData.section}`);
    chosenVariable.current?.scrollIntoView({
      behavior: "auto",
      block: "nearest",
    });
  }, [transversalData.section]);

  return (
    <motion.div
      id="AboutPage"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <InitSection sectionRef={InitRef} />
      <CodeSection sectionRef={CodeRef} />
      <MedSection sectionRef={MedRef} />
      <XpSection sectionRef={XpRef} />
      <ModelingSection sectionRef={ModelingRef} />
      <DesignSection sectionRef={DesignRef} />
      <MusicSection sectionRef={MusicRef} />
      <LangSection sectionRef={LangRef} />
      <WhySection sectionRef={WhyRef} />
    </motion.div>
  );
};

export default About;
