import React from "react";

import img1 from "./../../resources/skills/guitar1.jpg";
import img2 from "./../../resources/skills/guitar2.jpg";
import img3 from "./../../resources/skills/violin.jpeg";

interface props {
  sectionRef: any;
}

const MusicSection: React.FC<props> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} id="MusicSection">
      <h1>Musical Abilities</h1>
      <div className="MusicWrapper">
        <div className="MusicLeftBox">
          <div className="imgBox1">
            <img src={img1} alt="guitar #1 ilustration" />
            <h4>
              Concierto público organizado en el reloj de Pachuca, foto de mí y
              mis compañeros antes de la presentación
            </h4>
          </div>
          <p>
            Mi instrumento favorito es la guitarra, ya llevo alrededor de 5 años
            practicando guitarra, y muy recientemente he empezado a aprender
            piano y violín.
          </p>
          <div className="imgBox2">
            <img src={img2} alt="guitar #2 ilustration" />
            <h4>
              Foto de mí y mis compañeros durante la presentación en el reloj de
              Pachuca
            </h4>
          </div>
        </div>
        <div className="MusicRightBox">
          <div className="imgBox3">
            <img src={img3} alt="violin ilustration" />
            <h4>
              Imágen de mi, durante mi práctica semanal de violín, durante
              verano
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
