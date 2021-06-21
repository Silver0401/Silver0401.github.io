import React, { useEffect } from "react";
import anime from "animejs";

const HLeftBox: React.FC = () => {
  useEffect(() => {
    const tl = anime.timeline({
      loop: true,
      easing: "linear",
    });

    tl.add({
      delay: 1000,
      targets: ".changingText",
      duration: 1000,
      rotateX: ["0deg", "360deg"],
      opacity: [1, 0, 1],
    });
    tl.add(
      {
        targets: ["#h31", "#h33", "#h34", "#h35", "#h36"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h32",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
    tl.add(
      {
        targets: ".changingText",
        duration: 1000,
        rotateX: ["0deg", "360deg"],
        opacity: [1, 0, 1],
      },
      "+=1000"
    );

    tl.add(
      {
        targets: ["#h31", "#h32", "#h34", "#h35"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h33",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
    tl.add(
      {
        targets: ".changingText",
        duration: 1000,
        rotateX: ["0deg", "360deg"],
        opacity: [1, 0, 1],
      },
      "+=1000"
    );

    tl.add(
      {
        targets: ["#h31", "#h32", "#h33", "#h35"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h34",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
    tl.add(
      {
        targets: ".changingText",
        duration: 1000,
        rotateX: ["0deg", "360deg"],
        opacity: [1, 0, 1],
      },
      "+=1000"
    );

    tl.add(
      {
        targets: ["#h31", "#h32", "#h33", "#h34"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h35",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
    tl.add(
      {
        targets: ".changingText",
        duration: 1000,
        rotateX: ["0deg", "360deg"],
        opacity: [1, 0, 1],
      },
      "+=1000"
    );

    tl.add(
      {
        targets: ["#h31", "#h32", "#h33", "#h34", "#h35"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h36",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
    tl.add(
      {
        targets: ".changingText",
        duration: 1000,
        rotateX: ["0deg", "360deg"],
        opacity: [1, 0, 1],
      },
      "+=1000"
    );

    tl.add(
      {
        targets: ["#h35", "#h32", "#h33", "#h34", "#h36"],
        duration: 500,
        opacity: 0,
      },
      "-=500"
    );
    tl.add(
      {
        targets: "#h31",
        duration: 500,
        opacity: 1,
      },
      "-=500"
    );
    // ---------------------------------------------------
  }, []);

  return (
    <div className="HLeftBox">
      <div className="TitlesBox">
        <p>Greetings 🖖🏼, I'm </p>
        <h1>Ismael</h1>
        <h2>Muñoz Contreras</h2>
        <div className="changingText">
          <h3 id="h31">Software Developer ⚛️</h3>
          <h3 id="h32">UI/UX Designer 🔮</h3>
          <h3 id="h33">Medicine Student 🫀</h3>
          <h3 id="h34">App Constructor 📱</h3>
          <h3 id="h35">Robot Programmer 🤖</h3>
          <h3 id="h36">Web Engineer 💻</h3>
        </div>
      </div>

      <div className="ButtonsBox">
        <button>Hire Me 💼</button>
      </div>
    </div>
  );
};

export default HLeftBox;
