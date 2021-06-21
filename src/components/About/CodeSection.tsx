import React from "react";

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

interface props {
  sectionRef: any;
}

const CodeSection: React.FC<props> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} id="CodeSection">
      <div className="bigBgCircle" />

      <div className="CodeTitle">
        <h1>Programming Langugages and Software Skills</h1>
      </div>
      <div className="allSoftwareBox">
        <span className="ts">
          <p>Typescript</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="ts" src={tsLogo} />
              <p>85%</p>
            </div>
          </div>
        </span>
        <span className="js">
          <p>Javascript</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="js" src={jsLogo} />
              <p>90%</p>
            </div>
          </div>
        </span>
        <span className="py">
          <p>Python</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="py" src={pyLogo} />
              <p>90%</p>
            </div>
          </div>
        </span>
        <span className="css">
          <p>CSS</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="css" src={cssLogo} />
              <p>90%</p>
            </div>
          </div>
        </span>
        <span className="scss">
          <p>SCSS</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="scss" src={scssLogo} />
              <p>90%</p>
            </div>
          </div>
        </span>
        <span className="html">
          <p>HTML</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="html" src={htmlLogo} />
              <p>90%</p>
            </div>
          </div>
        </span>
        <span className="java">
          <p>Java</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="java" src={javaLogo} />
              <p>75%</p>
            </div>
          </div>
        </span>
        <span className="react">
          <p>React.js</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="react" src={reactLogo} />
              <p>90%</p>
            </div>
          </div>
        </span>
        <span className="reactNat">
          <p>React Native</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="reactNat" src={reactNatLogo} />
              <p>80%</p>
            </div>
          </div>
        </span>
        <span className="mySQL">
          <p>mySQL</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="mySQL" src={sqlLogo} />
              <p>80%</p>
            </div>
          </div>
        </span>
        <span className="node">
          <p>Node.js</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="node" src={nodeLogo} />
              <p>85%</p>
            </div>
          </div>
        </span>
        <span className="figma">
          <p>Figma</p>
          <div className="progressBar">
            <div className="outerBar">
              <div className="innerBar" />
            </div>
          </div>
          <div className="imgBox">
            <div className="imgContainer">
              <img alt="figma" src={figmaLogo} />
              <p>80%</p>
            </div>
          </div>
        </span>
      </div>
    </section>
  );
};

export default CodeSection;
