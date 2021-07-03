import React, { useEffect, useState } from "react";
import anime from "animejs";

import CarnerosImg1 from "./../../resources/Carneros/carneros3.jpg";
import CarnerosImg2 from "./../../resources/Carneros/carneros7.png";
import IkigaiImg1 from "./../../resources/IKIGAI/ikigai1.jpg";
import IkigaiImg2 from "./../../resources/IKIGAI/ikigai2.jpg";

import FirstImg1 from "./../../resources/FIRST/keybot1.jpg";
import FirstImg2 from "./../../resources/FIRST/keybot2.jpg";
import FirstImg3 from "./../../resources/FIRST/keybot3.jpg";
import FirstImg4 from "./../../resources/FIRST/keybot4.jpg";
import FirstImg5 from "./../../resources/FIRST/keybot5.png";

import BrainvueImg1 from "./../../resources/WBV/bv1.jpeg";
import BrainvueImg2 from "./../../resources/WBV/bv2.jpeg";
import WerImg1 from "./../../resources/WBV/wer1.jpeg";
import WerImg2 from "./../../resources/WBV/wer2.jpeg";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFlip,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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

type XpBlocks =
  | "First"
  | "Carneros"
  | "Wer"
  | "Brainvue"
  | "BasicEd"
  | "HighEd"
  | "UniEd";

const Images = [
  [CarnerosImg1, CarnerosImg2, IkigaiImg1, IkigaiImg2],

  [FirstImg1, FirstImg2, FirstImg3, FirstImg4, FirstImg5],

  [WerImg1, WerImg2],

  [BrainvueImg1, BrainvueImg2],
];

const XpSection: React.FC<props> = ({ sectionRef }) => {
  const [blockSelected, setBlockSelected] = useState<XpBlocks>("First");

  const SwiperSlideProvider = () => {
    let selectedImgObject: Array<any>;

    switch (blockSelected) {
      case "First":
        selectedImgObject = Images[1];
        break;
      case "Carneros":
        selectedImgObject = Images[0];
        break;
      case "Brainvue":
        selectedImgObject = Images[3];
        break;
      case "Wer":
        selectedImgObject = Images[2];
        break;
      default:
        selectedImgObject = Images[1];
        break;
    }

    return selectedImgObject.map((img, index) => {
      return (
        <SwiperSlide key={`${img} #${index + 1}`}>
          <img src={img} alt={`${img} #${index + 1}`} />
        </SwiperSlide>
      );
    });
  };

  const BlockDescriptionProvider = () => {
    let selectedText = "";

    switch (blockSelected) {
      case "First":
        selectedText =
          'Fungí como lider y mentor de programación para el equipo Keybot, equipo inscrito en la competencia internacional de robótica "FIRST", específicamente en la categoría de "FRC"';
        break;
      case "Carneros":
        selectedText =
          "Fui miembro del grupo carneros, grupo enfocado al liderazgo, así como a la realización de actividades que buscaban el fortalezimiento personal";
        break;
      case "Brainvue":
        selectedText =
          "Se trata de un equipo universitario enfocado al desarrollo de actividades de salud pediátrica a través de robots NAO, grupo para el cual programe dicho robot";
        break;
      case "Wer":
        selectedText =
          "WER por sus siglas, World Educational Robot, es una competencia nacional de Robotica para niños de secundaria a prepa, donde participé como mentor del área de programación";
        break;
      case "BasicEd":
        selectedText =
          "Toda mi educación primaria y secundaria la lleve a acbo en la escuela americana de pachuca, la cual veremos más adelante influyo mucho en mi dominión del inglés";
        break;
      case "HighEd":
        selectedText =
          "Fue durante mi tiempo en la preparatoria, que estuve realizando mis actividades de mentoría para FIRST, así como para WER.";
        break;
      case "UniEd":
        selectedText =
          "Actualmente estoy cursando la carrera universitaria de médico cirujano, además de estar involucrado en grupos estudiantiles tanto médicos como de robótica.";
        break;
      default:
        selectedText = "error";
        break;
    }

    return selectedText;
  };

  useEffect(() => {
    const tl = anime.timeline({
      targets: ".xpImgContainer",
    });

    tl.add({
      duration: 500,
      easing: "linear",
      translateY: "100%",
      opacity: 0,
    });

    tl.add(
      {
        duration: 50,
        easing: "linear",
        translateY: "0%",
      },
      "+=300"
    );

    tl.add(
      {
        opacity: 1,
        duration: 1000,
        easing: "easeOutBounce",
        translateX: ["-100%", "0%"],
      },
      "+=100"
    );
  }, [blockSelected]);

  return (
    <section ref={sectionRef} id="XpSection">
      <div className="proyectBox">
        <h1>Experience and Education</h1>
        <div className="xpImgContainer">
          <div className="imgBox">
            <div className="logoBox">Svg</div>
            <Swiper
              effect="flip"
              spaceBetween={50}
              slidesPerView={1}
              navigation
              loop={true}
              pagination={{ clickable: true }}
            >
              {SwiperSlideProvider()}
            </Swiper>
          </div>
          <h4 className="imgDescription">{BlockDescriptionProvider()}</h4>
        </div>
      </div>
      <div className="edXpBar">
        <div className="bgRectangle" />
        <ul id="xpUL">
          <li id="TitleBar">Experience 🗂</li>
          <div className="Title3D" />
          <li
            className={
              blockSelected === "Carneros" ? "selected" : "notSelected"
            }
            onClick={() => {
              setBlockSelected("Carneros");
            }}
          >
            <h4>integrante de Carneros e Ikigai</h4>
            <p>
              Mi educación primaria secundaria blab alj alsdjfl aksdflkasj
              dflkajsd fsd asdf
            </p>
          </li>
          <li
            className={blockSelected === "First" ? "selected" : "notSelected"}
            onClick={() => {
              setBlockSelected("First");
            }}
          >
            <h4>lider y mentor FIRST</h4>
            <p>
              Mi educación primaria secundaria blab alj alsdjfl aksdflkasj
              dflkajsd fsd asdf
            </p>
          </li>
          <li
            className={blockSelected === "Wer" ? "selected" : "notSelected"}
            onClick={() => {
              setBlockSelected("Wer");
            }}
          >
            <h4>lider y mentor WER</h4>
            <p>
              Mi educación primaria secundaria blab alj alsdjfl aksdflkasj
              dflkajsd fsd asdf
            </p>
          </li>
          <li
            className={
              blockSelected === "Brainvue" ? "selected" : "notSelected"
            }
            onClick={() => {
              setBlockSelected("Brainvue");
            }}
          >
            <h4>programador de BrainVue</h4>
            <p>
              Mi educación primaria secundaria blab alj alsdjfl aksdflkasj
              dflkajsd fsd asdf
            </p>
          </li>
        </ul>
        <ul id="eduUL">
          <li id="TitleBar">Education 📚</li>
          <div className="Title3D" />
          <li
            className={blockSelected === "BasicEd" ? "selected" : "notSelected"}
            onClick={() => {
              setBlockSelected("BasicEd");
            }}
          >
            <h4>Educación Básica</h4>
            <p>
              Mi educación primaria secundaria blab alj alsdjfl aksdflkasj
              dflkajsd fsd asdf
            </p>
          </li>
          <li
            className={blockSelected === "HighEd" ? "selected" : "notSelected"}
            onClick={() => {
              setBlockSelected("HighEd");
            }}
          >
            <h4>Educación Preparatoria</h4>
            <p>
              Mi educación primaria secundaria blab alj alsdjfl aksdflkasj
              dflkajsd fsd asdf
            </p>
          </li>
          <li
            className={blockSelected === "UniEd" ? "selected" : "notSelected"}
            onClick={() => {
              setBlockSelected("UniEd");
            }}
          >
            <h4>Educación Universitaria</h4>
            <p>
              Mi educación primaria secundaria blab alj alsdjfl aksdflkasj
              dflkajsd fsd asdf
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default XpSection;
