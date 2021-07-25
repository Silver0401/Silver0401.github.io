import React, { useContext } from "react";
import { ChosenDataContext } from "./../ChosenData";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const HLeftBox: React.FC = () => {
  const { transversalData, setTransversalData } = useContext(ChosenDataContext);
  const { t } = useTranslation();
  const History = useHistory();

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

          <span id="blinker" />
          <span id="space" />
        </div>
      </div>

      <div className="ButtonsBox">
        <button onClick={() => History.push("/Contact")}>
          {t("HomeLeft.HireButton")}
        </button>
        <button
          onClick={() => {
            if (transversalData.knowMeButtonClicked) {
            } else {
              console.log("animInit");
              setTransversalData({
                ...transversalData,
                knowMeButtonClicked: true,
              });
            }
          }}
        >
          {t("HomeRight.KnowMeButton")}
        </button>
      </div>
    </div>
  );
};

export default HLeftBox;
