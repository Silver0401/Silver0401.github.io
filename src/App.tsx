import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import anime from "animejs";

// App Main Components
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NavBar from "./components/nav";


const App = () => {

  const [siteStructure] = useState <"vertical" | "horizontal"> ("vertical")

  useEffect(() => {

		function MoveLoader() {
      const Loader = anime.timeline({
        easing: "easeInOutSine",
      });

      Loader.add({
        delay: 500,
        targets: ".MovingBox",
        duration: 2200,
        translateY: ["120%", "-120%"],
      });

      Loader.add(
        {
          targets: ".Loader",
          duration: 750,
          height: "0px",
        },
        "-=1700"
      );

    }

    

    window.onload = () => {
      MoveLoader()
    }

  }, [])

  return (
    <div className="App">
      <NavBar siteStructure={siteStructure} />

      {siteStructure === "vertical" ? (
        <div className="AppContainer">
          <HomePage />

          <AboutPage />

          <ContactPage />
        </div>
      ) : (
        <div className="AppContainer">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/About" component={AboutPage} />
            <Route exact path="/Contact" component={ContactPage} />
          </Switch>
        </div>
      )}

      <span className="Loader">
        <span className="box">
          <div className="AnimBox">
            <div className="CenterBall Ball"></div>
            <div className="MiddleBall Ball"></div>
            <div className="OuterBall Ball"></div>
            <div className="ExtraOuterBall Ball"></div>
          </div>
          <h1>Loading...</h1>
        </span>

        <div className="MovingBox"></div>
      </span>
    </div>
  );
}

export default App;
