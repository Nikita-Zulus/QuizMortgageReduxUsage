import React from "react";
import { Link } from "react-router-dom";

export function FirstPage() {
  return (
    <div>
      <div className="FirstPage">
        <div className="Ipoteka">Ипотека</div>
        <div className="firstPageText">
          Поможем узнать реальные ставки
          <br />и получить решение по ипотеке,
          <br />
          не выходя из дома.
          <br />
          <br />
          Услуга бесплатна для вас -<br />
          нам платят банки
        </div>
        <div className="Bender"></div>
        <Link className="button" to="/birthplace">
          Интересно
        </Link>
      </div>
    </div>
  );
}
