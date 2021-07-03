import React, { useEffect, useState } from "react";

// Logos
import tsLogo from "./../../resources/Icons/ts.png";
import jsLogo from "./../../resources/Icons/js.png";
import pyLogo from "./../../resources/Icons/python.png";
import cssLogo from "./../../resources/Icons/css.png";
import scssLogo from "./../../resources/Icons/sass.png";
import htmlLogo from "./../../resources/Icons/html.png";
import javaLogo from "./../../resources/Icons/java.png";
import reactLogo from "./../../resources/Icons/react.png";
import reactNatLogo from "./../../resources/Icons/reactNative.png";
import sqlLogo from "./../../resources/Icons/mySQL.png";
import nodeLogo from "./../../resources/Icons/node.png";
import figmaLogo from "./../../resources/Icons/figma.png";

import clLogo from "./../../resources/Icons/clLogo.png";
import imLogo from "./../../resources/Icons/imLogo.png";
import meLogo from "./../../resources/Icons/meLogo.png";
import mwLogo from "./../../resources/Icons/mwLogo.png";
import stLogo from "./../../resources/Icons/stLogo.png";
import swLogo from "./../../resources/Icons/swLogo.png";
import vsLogo from "./../../resources/Icons/vsLogo.png";
import mpLogo from "./../../resources/Icons/mpLogo.png";
import xcLogo from "./../../resources/Icons/xcLogo.png";
import blendLogo from "./../../resources/Icons/blendLogo.png";
import asLogo from "./../../resources/Icons/asLogo.png";
import gimpLogo from "./../../resources/Icons/gimpLogo.png";

interface props {
  sectionRef: any;
}

const CodeSection: React.FC<props> = ({ sectionRef }) => {
  const [langInputSatus, setLangInputStatus] = useState<"on" | "off">("on");
  const [softInputSatus, setSoftInputStatus] = useState<"on" | "off">("on");

  const CreateLangSoftBox = (
    type: "lang" | "soft",
    name: string,
    abbreviation: string,
    image: string,
    percentage: number
  ) => {
    if (type == "lang") {
      return (
        <span
          style={
            langInputSatus === "on"
              ? { opacity: 1 }
              : { opacity: 0, display: "none" }
          }
          id="lang"
          className={abbreviation}
        >
          <p>{name}</p>
          <div className="progressBar">
            <div className="outerBar">
              <div
                className="innerBar"
                style={{ width: `${percentage - 7}%` }}
              />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt={`${name} svg`} src={image} />
              <p>{`${percentage}%`}</p>
            </div>
          </div>
        </span>
      );
    } else {
      return (
        <span
          style={
            softInputSatus === "on"
              ? { opacity: 1 }
              : { opacity: 0, display: "none" }
          }
          id="soft"
          className={abbreviation}
        >
          <p>{name}</p>
          <div className="progressBar">
            <div className="outerBar">
              <div
                className="innerBar"
                style={{ width: `${percentage - 7}%` }}
              />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt={`${name} svg`} src={image} />
              <p>{`${percentage}%`}</p>
            </div>
          </div>
        </span>
      );
    }
  };

  return (
    <section ref={sectionRef} id="CodeSection">
      <div className="CodeTitle">
        <h1>Programming Langugages and Software Skills</h1>
        <div className="inputBox">
          <span>
            <label>Languages</label>
            <input
              onClick={() =>
                setLangInputStatus(langInputSatus === "on" ? "off" : "on")
              }
              value={langInputSatus}
              defaultChecked
              type="checkbox"
            />
          </span>
          <span>
            <label>Softwares</label>
            <input
              onClick={() =>
                setSoftInputStatus(softInputSatus === "on" ? "off" : "on")
              }
              value={softInputSatus}
              defaultChecked
              type="checkbox"
            />
          </span>
        </div>
      </div>
      <div className="allSoftwareBox">
        {CreateLangSoftBox("lang", "Typescript", "ts", tsLogo, 85)}
        {CreateLangSoftBox("lang", "Javascript", "js", jsLogo, 90)}
        {CreateLangSoftBox("lang", "Python", "py", pyLogo, 90)}
        {CreateLangSoftBox("lang", "CSS", "css", cssLogo, 90)}
        {CreateLangSoftBox("lang", "Sass", "scss", scssLogo, 90)}
        {CreateLangSoftBox("lang", "HTML", "html", htmlLogo, 90)}
        {CreateLangSoftBox("lang", "Java", "java", javaLogo, 75)}
        {CreateLangSoftBox("lang", "React.js", "react", reactLogo, 90)}
        {CreateLangSoftBox(
          "lang",
          "React Native",
          "reactNat",
          reactNatLogo,
          80
        )}
        {CreateLangSoftBox("lang", "mySQL", "mySQL", sqlLogo, 80)}
        {CreateLangSoftBox("lang", "Node.js", "node", nodeLogo, 85)}
        {CreateLangSoftBox("soft", "Figma", "figma", figmaLogo, 80)}
        {CreateLangSoftBox("soft", "VS Code", "vs", vsLogo, 90)}
        {CreateLangSoftBox("soft", "Sublime Text", "st", stLogo, 90)}
        {CreateLangSoftBox("soft", "M. Excel", "st", meLogo, 75)}
        {CreateLangSoftBox("soft", "M. Word", "st", mwLogo, 90)}
        {CreateLangSoftBox("soft", "M. PowerPoint", "st", mpLogo, 90)}
        {CreateLangSoftBox("soft", "Command Line", "cl", clLogo, 90)}
        {CreateLangSoftBox("soft", "XCode", "xc", xcLogo, 85)}
        {CreateLangSoftBox("soft", "Android Studio", "as", asLogo, 80)}
        {CreateLangSoftBox("soft", "Blender", "blend", blendLogo, 75)}
        {CreateLangSoftBox("soft", "Solid Works", "sw", swLogo, 75)}
        {CreateLangSoftBox("soft", "iMovie", "im", imLogo, 90)}
        {CreateLangSoftBox("soft", "Gimp", "gimp", gimpLogo, 75)}
      </div>
    </section>
  );
};

export default CodeSection;
