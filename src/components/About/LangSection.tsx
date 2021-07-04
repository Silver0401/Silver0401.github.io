import React, { useEffect, useState } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFlip,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import anime from "animejs";
import { useTranslation } from "react-i18next";

import img1 from "./../../resources/lang/americana1.jpeg";
import img2 from "./../../resources/lang/americana2.jpeg";
import img3 from "./../../resources/lang/americana3.jpeg";

import img4 from "./../../resources/lang/mex.jpeg";
import img5 from "./../../resources/lang/español1.jpeg";
import img6 from "./../../resources/lang/español3.jpeg";

import img7 from "./../../resources/lang/aleman1.jpeg";
import img8 from "./../../resources/lang/aleman2.jpeg";
import img9 from "./../../resources/lang/aleman3.jpeg";

// Scss carousel styling files
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-flip/effect-flip.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFlip]);

interface props {
  sectionRef: any;
}

const LangSection: React.FC<props> = ({ sectionRef }) => {
  const [langSelected, setLangSelected] = useState<"en" | "sp" | "ge">("sp");
  const { t } = useTranslation();

  useEffect(() => {
    const tl = anime.timeline({
      targets: ".langDisplay",
    });

    tl.add({
      duration: 500,
      easing: "linear",
      translateX: "-100%",
      opacity: 0,
    });

    tl.add({
      duration: 1000,
      easing: "easeOutBounce",
      translateX: ["100%", "0%"],
      opacity: 1,
    });
  }, [langSelected]);

  return (
    <section ref={sectionRef} id="LangSection">
      <h1>{t("LangSection.Title")}</h1>
      <div className="langSelector">
        <span
          onClick={() => setLangSelected("sp")}
          className={langSelected === "sp" ? "langBClicked" : "langBNotClicked"}
        >
          {t("LangSection.Spanish.Title")} 🇲🇽
        </span>
        <span
          onClick={() => setLangSelected("en")}
          className={langSelected === "en" ? "langBClicked" : "langBNotClicked"}
        >
          {t("LangSection.English.Title")} 🇺🇸
        </span>
        <span
          onClick={() => setLangSelected("ge")}
          className={langSelected === "ge" ? "langBClicked" : "langBNotClicked"}
        >
          {t("LangSection.German.Title")} 🇩🇪
        </span>
      </div>
      <div className="langDisplay">
        <div className="imgBox">
          <Swiper
            effect="flip"
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img
                src={
                  langSelected === "en"
                    ? img1
                    : langSelected === "sp"
                    ? img4
                    : img7
                }
                className="square"
                alt="voades #1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={
                  langSelected === "en"
                    ? img2
                    : langSelected === "sp"
                    ? img5
                    : img8
                }
                className="rectangle"
                alt="voades #1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={
                  langSelected === "en"
                    ? img3
                    : langSelected === "sp"
                    ? img6
                    : img9
                }
                className="square"
                alt="voades #1"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="textBox">
          <ul
            style={
              langSelected === "en"
                ? { opacity: 1, transition: "opacity 2s" }
                : { opacity: 0, transition: "opacity 2s" }
            }
            id="en"
          >
            <li>{t("LangSection.Mastery")}B2</li>
            <li id="outerBar">
              <div className="innerBar" />
            </li>
            <li>
              {t("LangSection.English.Text")}
            </li>
          </ul>
          <ul
            style={
              langSelected === "sp"
                ? { opacity: 1, transition: "opacity 2s" }
                : { opacity: 0, transition: "opacity 2s" }
            }
            id="sp"
          >
            <li>{t("LangSection.Mastery")}{t("LangSection.Native")}</li>
            <li id="outerBar">
              <div className="innerBar" />
            </li>
            <li>
              {t("LangSection.Spanish.Text")}
            </li>
          </ul>
          <ul
            style={
              langSelected === "ge"
                ? { opacity: 1, transition: "opacity 500ms" }
                : { opacity: 0, transition: "opacity 500ms" }
            }
            id="ge"
          >
            <li>{t("LangSection.Mastery")}A2</li>
            <li id="outerBar">
              <div className="innerBar" />
            </li>
            <li>
              {t("LangSection.German.Text")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LangSection;
