import React, { useEffect } from "react";
import anime from "animejs";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const HLeftBox: React.FC = () => {
  const { t } = useTranslation();
  const History = useHistory();

  useEffect(() => {
    const tl = anime.timeline({
      loop: true,
      easing: "linear",
    });

    tl.add({
      delay: 1000,
      targets: ".changingText",
      duration: 1000,
      rotateX: ["0deg", "360deg"],
      opacity: [1, 0, 1],
    });
    tl.add(
      {
        targets: ["#h31", "#h33", "#h34", "#h35", "#h36"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h32",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
    tl.add(
      {
        targets: ".changingText",
        duration: 1000,
        rotateX: ["0deg", "360deg"],
        opacity: [1, 0, 1],
      },
      "+=1000"
    );

    tl.add(
      {
        targets: ["#h31", "#h32", "#h34", "#h35"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h33",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
    tl.add(
      {
        targets: ".changingText",
        duration: 1000,
        rotateX: ["0deg", "360deg"],
        opacity: [1, 0, 1],
      },
      "+=1000"
    );

    tl.add(
      {
        targets: ["#h31", "#h32", "#h33", "#h35"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h34",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
    tl.add(
      {
        targets: ".changingText",
        duration: 1000,
        rotateX: ["0deg", "360deg"],
        opacity: [1, 0, 1],
      },
      "+=1000"
    );

    tl.add(
      {
        targets: ["#h31", "#h32", "#h33", "#h34"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h35",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
    tl.add(
      {
        targets: ".changingText",
        duration: 1000,
        rotateX: ["0deg", "360deg"],
        opacity: [1, 0, 1],
      },
      "+=1000"
    );

    tl.add(
      {
        targets: ["#h31", "#h32", "#h33", "#h34", "#h35"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h36",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
    tl.add(
      {
        targets: ".changingText",
        duration: 1000,
        rotateX: ["0deg", "360deg"],
        opacity: [1, 0, 1],
      },
      "+=1000"
    );

    tl.add(
      {
        targets: ["#h35", "#h32", "#h33", "#h34", "#h36"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h31",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
  }, []);

  return (
    <div className="HLeftBox">
      <div className="TitlesBox">
        <p>{t("HomeLeft.TopHeader")}</p>
        <h1>Ismael</h1>
        <h2>Muñoz Contreras</h2>
        <div className="changingText">
          <h3 id="h31">{t("HomeLeft.PolyHeader1")}</h3>
          <h3 id="h32">{t("HomeLeft.PolyHeader2")}</h3>
          <h3 id="h33">{t("HomeLeft.PolyHeader3")}</h3>
          <h3 id="h34">{t("HomeLeft.PolyHeader4")}</h3>
          <h3 id="h35">{t("HomeLeft.PolyHeader5")}</h3>
          <h3 id="h36">{t("HomeLeft.PolyHeader6")}</h3>
        </div>
      </div>

      <div className="ButtonsBox">
        <button onClick={() => History.push("/Contact")}>
          {t("HomeLeft.HireButton")}
        </button>
      </div>
    </div>
  );
};

export default HLeftBox;
