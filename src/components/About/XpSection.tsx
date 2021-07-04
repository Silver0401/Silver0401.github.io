import React, { useEffect, useState } from "react";
import anime from "animejs";
import { useTranslation } from "react-i18next";

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

import BasicEdImg from "./../../resources/Schools/Americana.jpeg";
import HighEdImg from "./../../resources/Schools/Hidalgo.jpeg";
import UniEdImg1 from "./../../resources/Schools/mont.jpeg";
import UniEdImg2 from "./../../resources/Med/medUni.jpeg";

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

  [BasicEdImg],

  [HighEdImg],

  [UniEdImg1, UniEdImg2],
];

const XpSection: React.FC<props> = ({ sectionRef }) => {
  const [blockSelected, setBlockSelected] = useState<XpBlocks>("First");
  const { t } = useTranslation();

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
      case "BasicEd":
        selectedImgObject = Images[4];
        break;
      case "HighEd":
        selectedImgObject = Images[5];
        break;
      case "UniEd":
        selectedImgObject = Images[6];
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
        selectedText = t("XpSection.First.Text")
        break;
      case "Carneros":
        selectedText = t("XpSection.Carneros.Text")
        break;
      case "Brainvue":
        selectedText = t("XpSection.Brainvue.Text")
        break;
      case "Wer":
        selectedText = t("XpSection.WER.Text")
        break;
      case "BasicEd":
        selectedText = t("XpSection.Elemental.Text")
        break;
      case "HighEd":
        selectedText = t("XpSection.High.Text")
        break;
      case "UniEd":
        selectedText = t("XpSection.Uni.Text")
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
        <h1>{t("XpSection.Title")}</h1>
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
          <li id="TitleBar">{t("XpSection.Xp.Title")} 🗂</li>
          <div className="Title3D" />
          <li
            className={
              blockSelected === "Carneros" ? "selected" : "notSelected"
            }
            onClick={() => {
              setBlockSelected("Carneros");
            }}
          >
            <h4>{t("XpSection.Carneros.Title")}</h4>
            <p>2014 - 2016</p>
          </li>
          <li
            className={blockSelected === "First" ? "selected" : "notSelected"}
            onClick={() => {
              setBlockSelected("First");
            }}
          >
            <h4>{t("XpSection.First.Title")}</h4>
            <p>2014 - 2018</p>
          </li>
          <li
            className={blockSelected === "Wer" ? "selected" : "notSelected"}
            onClick={() => {
              setBlockSelected("Wer");
            }}
          >
            <h4>{t("XpSection.WER.Title")}</h4>
            <p>2013 - 2015</p>
          </li>
          <li
            className={
              blockSelected === "Brainvue" ? "selected" : "notSelected"
            }
            onClick={() => {
              setBlockSelected("Brainvue");
            }}
          >
            <h4>{t("XpSection.Brainvue.Title")}</h4>
            <p>2019 - 2020</p>
          </li>
        </ul>
        <ul id="eduUL">
          <li id="TitleBar">{t("XpSection.Edu.Title")} 📚</li>
          <div className="Title3D" />
          <li
            className={blockSelected === "BasicEd" ? "selected" : "notSelected"}
            onClick={() => {
              setBlockSelected("BasicEd");
            }}
          >
            <h4>{t("XpSection.Elemental.Title")}</h4>
            <p>2007 - 2016</p>
          </li>
          <li
            className={blockSelected === "HighEd" ? "selected" : "notSelected"}
            onClick={() => {
              setBlockSelected("HighEd");
            }}
          >
            <h4>{t("XpSection.High.Title")}</h4>
            <p>2016 - 2019</p>
          </li>
          <li
            className={blockSelected === "UniEd" ? "selected" : "notSelected"}
            onClick={() => {
              setBlockSelected("UniEd");
            }}
          >
            <h4>{t("XpSection.Uni.Title")}</h4>
            <p>2019 - Presente</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default XpSection;
