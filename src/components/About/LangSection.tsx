import img1 from "./../../resources/Carneros/carneros1.jpg";
import img2 from "./../../resources/Carneros/carneros2.jpg";
import img3 from "./../../resources/Carneros/carneros3.jpg";

import img4 from "./../../resources/IKIGAI/ikigai1.jpg";
import img5 from "./../../resources/IKIGAI/ikigai2.jpg";
import img6 from "./../../resources/IKIGAI/ikigai3.jpg";

import img7 from "./../../resources/FIRST/keybot1.jpg";
import img8 from "./../../resources/FIRST/keybot2.jpg";
import img9 from "./../../resources/FIRST/keybot3.jpg";

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
      <h1>Languages</h1>
      <div className="langSelector">
        <span
          onClick={() => setLangSelected("sp")}
          className={langSelected === "sp" ? "langBClicked" : "langBNotClicked"}
        >
          Español 🇲🇽
        </span>
        <span
          onClick={() => setLangSelected("en")}
          className={langSelected === "en" ? "langBClicked" : "langBNotClicked"}
        >
          English 🇺🇸
        </span>
        <span
          onClick={() => setLangSelected("ge")}
          className={langSelected === "ge" ? "langBClicked" : "langBNotClicked"}
        >
          Alemán 🇩🇪
        </span>
      </div>
      <div className="langDisplay">
        <div className="imgBox">
          <Swiper
            effect="flip"
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
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
            <li>Nivel de Dominio: B2</li>
            <li id="outerBar">
              <div className="innerBar" />
            </li>
            <li>
              I began learning english all the way back in primary school, since
              then I have achieved an almost native english speaking fluidity as
              well as writing.
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
            <li>Nivel de Dominio: Nativo</li>
            <li id="outerBar">
              <div className="innerBar" />
            </li>
            <li>
              Al ser de méxico, el español es mi primer idioma, por lo cual mi
              ortografía así como mi habla son excelentes.
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
            <li>Nivel de Dominio: A2</li>
            <li id="outerBar">
              <div className="innerBar" />
            </li>
            <li>
              Empece a aprender Alemán desde hace mi ingreso a la preparatoria y
              aunque me considero de nivel intermedio, aun sigo aprendiendo y
              mejorando mis conocimientos de este idioma.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LangSection;
