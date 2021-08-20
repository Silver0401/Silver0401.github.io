import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import anime from "animejs";
import { AnimatePresence } from "framer-motion";
import { ChosenDataContextProvider } from "./components/ChosenData";

// App Main Components
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NavBar from "./components/nav";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const App: React.FC = () => {
  const [siteStructure] = useState<"vertical" | "horizontal">("horizontal");
  const Location = useLocation();
  let query = useQuery();

  useEffect(() => {
    function MoveLoader() {
      const Loader = anime.timeline({
        easing: "easeInOutSine",
      });

      Loader.add({
        targets: ".MovingBox",
        duration: 2200,
        translateX: ["120%", "-120%"],
      });

      Loader.add(
        {
          targets: ".AnimBox",
          duration: 500,
          opacity: [1, 0],
        },
        "-=1700"
      );

      Loader.add(
        {
          targets: ".Loader",
          duration: 750,
          width: "0px",
        },
        "-=1700"
      );

      Loader.add(
        {
          targets: ".AppContainer",
          opacity: [0, 1],
        },
        "-=1000"
      );
    }

    setTimeout(() => {
      MoveLoader();
    }, 3000);
  }, []);

  return (
    <div className="App">
      <ChosenDataContextProvider>
        <NavBar siteStructure={siteStructure} />

        {siteStructure === "vertical" ? (
          <div className="AppContainer">
            <HomePage />

            <AboutPage selected={query.get("selected")} />

            <ContactPage />
          </div>
        ) : (
          <div className="AppContainer">
            <div className="BgBalls">
              <span className="ball1" />
              <span className="ball2" />
              <span className="ball3" />
              <span className="ball4" />
              <span className="ball5" />
            </div>

            <AnimatePresence exitBeforeEnter>
              <Switch location={Location} key={Location.pathname}>
                <Route
                  key="HomePage"
                  exact
                  path="/"
                  component={HomePage}
                  replace
                />
                <Route
                  key="AboutPage"
                  exact
                  path="/About"
                  component={() => (
                    <AboutPage selected={query.get("selected")} />
                  )}
                  replace
                />
                <Route
                  key="ContactPage"
                  exact
                  path="/Contact"
                  component={ContactPage}
                  replace
                />

                {/* <Child name={query.get("selected")} /> */}
              </Switch>
            </AnimatePresence>
          </div>
        )}
      </ChosenDataContextProvider>

      <span className="Loader">
        <span className="box">
          <div className="AnimBox">
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
                stroke="white"
                strokeWidth={3}
                id="path"
              />
              <path
                d="M169.492 107.744C170.932 109.04 174.244 105.728 174.1 102.128C180.868 83.408 207.94 25.088 215.14 13.856C213.412 30.992 211.684 50.432 211.684 68.144C211.684 72.032 211.828 75.92 211.972 79.664C212.98 99.824 216.436 133.232 232.708 133.232C234.436 133.232 234.148 131.648 233.284 131.36C222.484 127.904 218.02 107.168 217.156 78.8C217.012 75.2 217.012 71.744 217.012 68.144C217.012 50.144 218.452 32.864 220.612 10.544C220.756 7.664 216.724 3.632 214.42 6.65599C208.66 11.552 181.588 70.592 171.652 95.216C165.604 70.448 164.02 43.376 160.708 23.36C160.132 20.624 155.38 17.744 154.948 19.76C154.948 19.904 154.804 20.048 154.948 20.192C154.66 21.92 154.516 24.944 153.94 27.104C145.876 56.192 110.02 129.632 67.8275 116.528C66.3875 116.096 66.5315 117.392 67.6835 118.4C99.7955 133.232 140.98 86.288 157.396 30.56C159.556 55.472 163.732 81.392 169.492 107.744Z"
                stroke="white"
                strokeWidth={3}
              />
              <path
                d="M282.207 134.96C284.367 135.104 286.384 135.248 288.4 135.248C318.64 135.248 342.255 113.936 346.863 89.6C348.015 83.552 344.704 80.24 344.704 82.4C340.528 107.744 312.592 131.792 287.104 131.792C285.376 131.792 283.504 131.648 281.776 131.36C254.848 127.616 242.608 98.528 243.184 75.92C244.048 42.512 266.943 7.80799 301.359 8.96C318.207 9.536 324.112 19.904 324.112 32.864C324.112 50.576 313.023 72.896 303.087 80.96C302.367 81.536 301.792 82.544 302.656 82.976C303.808 83.552 309.568 80.24 310.432 79.52C320.8 71.168 329.728 51.728 329.728 34.88C329.728 18.896 321.664 5.21599 299.344 5.21599C261.76 5.21599 237.568 43.088 236.992 76.352C236.56 104.72 254.415 132.368 282.207 134.96Z"
                stroke="white"
                strokeWidth={3}
              />
            </svg>
          </div>
        </span>

        <div className="MovingBox"></div>
      </span>
    </div>
  );
};

export default App;
