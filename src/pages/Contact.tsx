import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import CLeftBox from "./../components/Contact/CLeftBox";
import CRightBox from "./../components/Contact/CRightBox";

export const Contact: React.FC = () => {
  const MotionTransitionVariants = {
    initPosition: {
      opacity: 0,
      transform: "translateX(100%)",
      transition: {
        duration: 0.7,
      },
    },
    DesiredPosition: {
      opacity: 1,
      transform: "translateX(0%)",
      transition: {
        duration: 0.7,
      },
    },
    ExitPosition: {
      opacity: 0,
      transform: "translateY(100%)",
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      id="ContactPage"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <CLeftBox />
      <CRightBox />
    </motion.div>
  );
};

export default Contact;
