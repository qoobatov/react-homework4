import React from "react";
import "./Card.css";
import Modal from "./modal/Modal";
import { useState } from "react";
import Dive from "./modal/img/divewath.jpg"

function Card() {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div className="card-app">
      <Modal active={modalActive} setActive={setModalActive} />
      <main>
        <p className="small-text">
          Тактические мужские часы для дайвинга.        </p>
          <img className="divewatch" src={Dive} alt="" />
        <button className="btn" onClick={() => setModalActive(true)}>
          View more
        </button>
      </main>
    </div>
  );
}

export default Card;
