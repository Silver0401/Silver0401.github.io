import React from "react";

const CLeftBox: React.FC = () => {
  return (
    <div className="CLeftBox">
      <div className="header">
        <h2>Like What you see?</h2>
        <h3>Let's get in touch</h3>
      </div>
      <form>
        <span>
          <input minLength={1} required type="name" />
          <label>Nombre</label>
        </span>
        <span>
          <input minLength={1} required type="email" />
          <label>Correo</label>
        </span>
        <span>
          <input minLength={1} required type="tel" />
          <label>Telefono</label>
        </span>
        <span>
          <textarea minLength={1} required></textarea>
          <label>Mensaje</label>
        </span>
      </form>
    </div>
  );
};

export default CLeftBox;
