import React from "react";
import "../modal/Modal.css";
import Divers from "./img/divers.jpg"

function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p>
            Тактические мужские часы для дайвинга Citizen из титана 42 мм NH35,
            быстрое механическое движение, мужские часы с сапфировым стеклом,
            Водонепроницаемость 200 м, фонарик 5 1 отзыв 47 заказов(ов) 12
            991,80 руб. 25 983,59 руб. -50%
          </p>
          <img className="divers" src={Divers} alt="" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
