import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ChosenDataContext } from "./ChosenData";

import mexLogo from "./../resources/Icons/mex.svg";
import usLogo from "./../resources/Icons/us.svg";

interface props {
  siteStructure: "horizontal" | "vertical";
}

const Nav: React.FC<props> = ({ siteStructure }) => {
  const [navState, toggleNav] = useState(false);
  const [color, toggleColor] = useState<"light" | "dark">("dark");
  const [lang, toggleLang] = useState<"en" | "sp">("sp");
  const [transversalData, setTransversalData] = useContext(ChosenDataContext);

  const Icon = (chosen: string) => {
    switch (chosen) {
      case "Contact":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8 2c-1.105 0-2 .896-2 2v14.678c-.001 2.213 2.503 3.322 6.005 3.322 3.499 0 5.995-1.106 5.995-3.322v-14.678c0-1.104-.895-2-2-2h-8zm4 18c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm4-4h-8v-10h8v10zm4-7.459c.496.495.803 1.179.803 1.935.001.755-.305 1.44-.8 1.936l.814.814c.703-.704 1.139-1.677 1.139-2.751-.001-1.075-.436-2.046-1.141-2.749l-.815.815zm1.427-1.426c.86.859 1.393 2.046 1.393 3.358.001 1.313-.532 2.502-1.391 3.363l.834.835c1.074-1.075 1.738-2.56 1.737-4.198 0-1.639-.664-3.121-1.737-4.193l-.836.835zm-18.241.611c-.705.703-1.14 1.674-1.141 2.748s.435 2.047 1.139 2.751l.814-.814c-.495-.496-.8-1.18-.8-1.936s.307-1.44.802-1.935l-.814-.814zm-1.447-1.447c-1.075 1.073-1.738 2.554-1.739 4.194-.001 1.638.664 3.124 1.737 4.198l.834-.835c-.859-.861-1.391-2.05-1.39-3.363 0-1.312.531-2.5 1.392-3.358l-.834-.836z" />
          </svg>
        );
      case "About":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm.256 11h-8v-1h8v1zm4-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z" />
          </svg>
        );
      case "Home":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
          </svg>
        );
      case "Sun":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={color === "dark" ? { opacity: 0 } : { opacity: 1 }}
          >
            <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
          </svg>
        );
      case "Moon":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={color === "light" ? { opacity: 0 } : { opacity: 1 }}
          >
            <path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z" />
          </svg>
        );
      case "Mex":
        return (
          <img
            alt="spanish"
            src={mexLogo}
            style={lang === "en" ? { opacity: 0 } : { opacity: 1 }}
          />
        );
      case "Us":
        return (
          <img
            alt="english"
            src={usLogo}
            style={lang === "sp" ? { opacity: 0 } : { opacity: 1 }}
          />
        );
      default:
        return (
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z" />
            </svg>
          </div>
        );
    }
  };

  useEffect(() => {
    const root = document.documentElement;

    if (color === "dark") {
      root.style.setProperty("--SiteColor1", "#000000");
      root.style.setProperty("--SiteColor2", "#101010");
      root.style.setProperty("--SiteColor3", "#ffffff");
    } else {
      root.style.setProperty("--SiteColor1", "#ffffff");
      root.style.setProperty("--SiteColor2", "#e1dbdb");
      root.style.setProperty("--SiteColor3", "#000000");
    }
  });

  return (
    <nav className={navState ? "NavBar Toggled" : "NavBar"}>
      <div className="NavTitle">
        <div
          className={navState ? "Burguer BToggled" : "Burguer"}
          onClick={() => toggleNav(!navState)}
        >
          <span id="line1" />
          <span id="line2" />
          <span id="line3" />
        </div>
        <div className="NavLogo">
          <svg
            width="348"
            height="141"
            viewBox="0 0 348 141"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            className="Logo"
          >
            <path
              d="M135.944 10.832C137.096 10.832 137.24 9.82399 136.52 8.52799C135.656 7.376 134.072 6.512 132.776 6.512C114.92 7.52 97.208 8.384 78.488 9.96799C79.352 7.80799 80.216 5.936 81.224 4.352C81.656 3.632 80.504 2.192 79.352 1.32799C77.48 0.176 76.04 0.0319948 75.608 0.607996C74.024 2.768 72.584 6.224 71.288 10.544C55.016 12.128 38.024 14.288 19.592 17.456C18.44 17.6 18.584 18.752 19.304 19.904C20.312 21.056 22.04 21.92 23.192 21.776C38.744 19.04 54.296 17.024 69.848 15.584C63.944 36.752 59.48 71.312 57.896 86.288C57.032 93.344 55.88 107.744 55.88 119.84C37.304 122 18.728 125.312 1.73601 129.344C0.584008 129.632 0.728008 130.784 1.73601 131.936C2.74401 133.088 4.32801 133.808 5.48001 133.664C13.832 131.648 37.016 127.616 55.88 124.88C56.024 130.928 56.456 135.68 57.464 137.84C58.184 138.992 58.616 140 60.2 140.288C61.064 140.288 61.496 139.856 61.352 139.136L60.92 138.416C60.344 133.52 60.056 128.912 60.056 124.304C64.952 123.584 69.272 123.152 73.016 122.72C84.392 121.424 95.912 120.704 106.136 120.704C112.616 120.704 118.232 120.992 123.416 121.712C124.856 121.856 125.432 121.136 124.712 119.84C123.992 118.688 122.408 117.68 121.112 117.392C115.928 116.672 110.312 116.384 103.976 116.384C93.32 116.384 81.224 117.248 69.704 118.4L60.2 119.264C60.632 108.752 62.216 98.672 63.368 88.304C67.112 63.392 71 32.864 76.76 14.864C96.632 13.136 116.36 11.984 135.944 10.832Z"
              strokeWidth={3}
              id="path"
            />
            <path
              d="M169.492 107.744C170.932 109.04 174.244 105.728 174.1 102.128C180.868 83.408 207.94 25.088 215.14 13.856C213.412 30.992 211.684 50.432 211.684 68.144C211.684 72.032 211.828 75.92 211.972 79.664C212.98 99.824 216.436 133.232 232.708 133.232C234.436 133.232 234.148 131.648 233.284 131.36C222.484 127.904 218.02 107.168 217.156 78.8C217.012 75.2 217.012 71.744 217.012 68.144C217.012 50.144 218.452 32.864 220.612 10.544C220.756 7.664 216.724 3.632 214.42 6.65599C208.66 11.552 181.588 70.592 171.652 95.216C165.604 70.448 164.02 43.376 160.708 23.36C160.132 20.624 155.38 17.744 154.948 19.76C154.948 19.904 154.804 20.048 154.948 20.192C154.66 21.92 154.516 24.944 153.94 27.104C145.876 56.192 110.02 129.632 67.8275 116.528C66.3875 116.096 66.5315 117.392 67.6835 118.4C99.7955 133.232 140.98 86.288 157.396 30.56C159.556 55.472 163.732 81.392 169.492 107.744Z"
              strokeWidth={3}
            />
            <path
              d="M282.207 134.96C284.367 135.104 286.384 135.248 288.4 135.248C318.64 135.248 342.255 113.936 346.863 89.6C348.015 83.552 344.704 80.24 344.704 82.4C340.528 107.744 312.592 131.792 287.104 131.792C285.376 131.792 283.504 131.648 281.776 131.36C254.848 127.616 242.608 98.528 243.184 75.92C244.048 42.512 266.943 7.80799 301.359 8.96C318.207 9.536 324.112 19.904 324.112 32.864C324.112 50.576 313.023 72.896 303.087 80.96C302.367 81.536 301.792 82.544 302.656 82.976C303.808 83.552 309.568 80.24 310.432 79.52C320.8 71.168 329.728 51.728 329.728 34.88C329.728 18.896 321.664 5.21599 299.344 5.21599C261.76 5.21599 237.568 43.088 236.992 76.352C236.56 104.72 254.415 132.368 282.207 134.96Z"
              strokeWidth={3}
            />
          </svg>
        </div>
      </div>

      {siteStructure === "horizontal" ? (
        <ul>
          <li>
            <Link
              onClick={() => {
                toggleNav(false);
                setTransversalData({
                  ...transversalData,
                  KnowMeButtonClicked: false,
                });
                if (
                  window.location.href === "https://silver0401.github.io/" ||
                  window.location.href === "http://localhost:3000/"
                ) {
                  window.location.href = "/";
                }
              }}
              to="/"
            >
              {Icon("Home")}
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                toggleNav(false);
                setTransversalData({ ...transversalData, section: "Init" });
              }}
              to="/About"
            >
              {Icon("About")}
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link onClick={() => toggleNav(false)} to="/Contact">
              {Icon("Contact")}
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <button
              onClick={() => toggleColor(color === "dark" ? "light" : "dark")}
            >
              <div className="IconsBox">
                {Icon("Sun")}
                {Icon("Moon")}
              </div>
              <p>Color</p>
            </button>
          </li>
          <li>
            <button onClick={() => toggleLang(lang === "en" ? "sp" : "en")}>
              <div className="IconsBox">
                {Icon("Mex")}
                {Icon("Us")}
              </div>
              <p>Language</p>
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <a onClick={() => toggleNav(false)} href="#AboutPage">
              {Icon("Home")}
              <p>About</p>
            </a>
          </li>
          <li>
            <a onClick={() => toggleNav(false)} href="#ContactPage">
              {Icon("About")}
              <p>Contact Us</p>
            </a>
          </li>
          <li>
            <a onClick={() => toggleNav(false)} href="#ContactPage">
              {Icon("Contact")}
              <p>Coso</p>
            </a>
          </li>
          <li>
            <a onClick={() => toggleNav(false)} href="#ContactPage">
              <div className="IconsBox">
                {Icon("Sun")}
                {Icon("Moon")}
              </div>
              <p>Colors</p>
            </a>
          </li>
          <li>
            <a onClick={() => toggleNav(false)} href="#ContactPage">
              <div className="IconsBox">
                {Icon("Mex")}
                {Icon("Us")}
              </div>
              <p>Language</p>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
