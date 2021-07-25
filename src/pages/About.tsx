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
  const { transversalData, setTransversalData } = useContext(ChosenDataContext);

  const InitRef = useRef<HTMLTableSectionElement>(null);
  const CodeRef = useRef<HTMLTableSectionElement>(null);
  const MedRef = useRef<HTMLTableSectionElement>(null);
  const XpRef = useRef<HTMLTableSectionElement>(null);
  const LangRef = useRef<HTMLTableSectionElement>(null);
  const MusicRef = useRef<HTMLTableSectionElement>(null);
  const WhyRef = useRef<HTMLTableSectionElement>(null);
  const ModelingRef = useRef<HTMLTableSectionElement>(null);
  const DesignRef = useRef<HTMLTableSectionElement>(null);

  const MotionTransitionVariants = {
    initPosition: {
      opacity: 0,
      // overflow: "hidden",
      transition: {
        duration: transversalData.knowMeButtonClicked ? 1 : 0.7,
      },
    },
    DesiredPosition: {
      opacity: 1,
      // overflow: "scroll",
      transition: {
        duration: 0.7,
      },
    },
    ExitPosition: {
      opacity: 0,
      // overflow: "hidden",
      transition: {
        duration: 0.7,
      },
    },
  };

  const ScrollTracker = (data: any) => {
    const userPosition = data.target.scrollTop;
    const CodeSectionPosition = CodeRef.current?.offsetTop;
    const MedSectionPosition = MedRef.current?.offsetTop;
    const XpSectionPosition = XpRef.current?.offsetTop;
    const LangSectionPosition = LangRef.current?.offsetTop;
    const MusicSectionPosition = MusicRef.current?.offsetTop;
    const WhySectionPosition = WhyRef.current?.offsetTop;
    const ModelingSectionPosition = ModelingRef.current?.offsetTop;
    const DesignSectionPosition = DesignRef.current?.offsetTop;

    if (userPosition === 0) {
      setTransversalData({
        ...transversalData,
        scrollTo: false,
      });
    }

    if (CodeSectionPosition && MedSectionPosition) {
      if (
        userPosition > CodeSectionPosition - 1 &&
        userPosition < MedSectionPosition
      ) {
        if (transversalData.section === "CodeSection") {
        } else {
          console.log("in Code Section".toUpperCase());
          setTransversalData({
            ...transversalData,
            section: "CodeSection",
            scrollTo: false,
          });
        }
      }
    }
    if (MedSectionPosition && XpSectionPosition) {
      if (
        userPosition > MedSectionPosition - 1 &&
        userPosition < XpSectionPosition
      ) {
        if (transversalData.section === "MedSection") {
        } else {
          console.log("in Med Section".toUpperCase());
          setTransversalData({
            ...transversalData,
            section: "MedSection",
            scrollTo: false,
          });
        }
      }
    }
    if (XpSectionPosition && ModelingSectionPosition) {
      if (
        userPosition > XpSectionPosition - 1 &&
        userPosition < ModelingSectionPosition
      ) {
        if (transversalData.section === "XpSection") {
        } else {
          console.log("in Xp Section".toUpperCase());
          setTransversalData({
            ...transversalData,
            section: "XpSection",
            scrollTo: false,
          });
        }
      }
    }
    if (ModelingSectionPosition && DesignSectionPosition) {
      if (
        userPosition > ModelingSectionPosition - 1 &&
        userPosition < DesignSectionPosition
      ) {
        if (transversalData.section === "ModelingSection") {
        } else {
          console.log("in Modeling Section".toUpperCase());
          setTransversalData({
            ...transversalData,
            section: "ModelingSection",
            scrollTo: false,
          });
        }
      }
    }
    if (DesignSectionPosition && MusicSectionPosition) {
      if (
        userPosition > DesignSectionPosition - 1 &&
        userPosition < MusicSectionPosition
      ) {
        if (transversalData.section === "DesignSection") {
        } else {
          console.log("in Design Section".toUpperCase());
          setTransversalData({
            ...transversalData,
            section: "DesignSection",
            scrollTo: false,
          });
        }
      }
    }
    if (MusicSectionPosition && LangSectionPosition) {
      if (
        userPosition > MusicSectionPosition - 1 &&
        userPosition < LangSectionPosition
      ) {
        if (transversalData.section === "MusicSection") {
        } else {
          console.log("in Music Section".toUpperCase());
          setTransversalData({
            ...transversalData,
            section: "MusicSection",
            scrollTo: false,
          });
        }
      }
    }
    if (LangSectionPosition && WhySectionPosition) {
      if (
        userPosition > LangSectionPosition - 1 &&
        userPosition < WhySectionPosition
      ) {
        if (transversalData.section === "LangSection") {
        } else {
          console.log("in Lang Section".toUpperCase());
          setTransversalData({
            ...transversalData,
            section: "LangSection",
            scrollTo: false,
          });
        }
      }
    }
    if (WhySectionPosition) {
      if (userPosition > WhySectionPosition - 1) {
        if (transversalData.section === "WhySection") {
        } else {
          console.log("in Why Section".toUpperCase());
          setTransversalData({
            ...transversalData,
            section: "WhySection",
            scrollTo: false,
          });
        }
      }
    }
  };

  useEffect(() => {
    if (transversalData.scrollTo) {
      let chosenVariable: any;

      switch (transversalData.section) {
        case "MedSection":
          chosenVariable = MedRef;
          break;
        case "InitSection":
          chosenVariable = InitRef;
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
      }

      chosenVariable.current?.scrollIntoView({
        behavior: "auto",
        block: "nearest",
      });
    }
  }, [transversalData.scrollTo]);

  return (
    <motion.div
      id="AboutPage"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
      onScroll={(e) => ScrollTracker(e)}
    >
      <div
        onClick={() => {
          setTransversalData({
            ...transversalData,
            section: "InitSection",
            scrollTo: true,
          });
        }}
        className="TopArrowCircle"
      >
        <div className="arrow"></div>
      </div>

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
