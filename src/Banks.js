import React from "react";
import { Buttons } from "./Buttons.js";
import { createChangeAction } from "./Store.js";
import { connect } from "react-redux";

function Banks_({ choseBank, setChoseBank, setNextPage }) {
  const bank = [
    ["Сбербанк", "sber", "Sber"],
    ["ВТБ", "vtb", "Vtb"],
    ["Альфабанк", "alfa", "Alfa"],
    ["Райффайзенбанк", "raifaizen", "Raifaizen"],
    ["Газпром", "gazprom", "Gazprom"],
    ["Открытие", "otcritie", "Otcritie"],
    ["Росбанк", "rosbank", "Rosbank"],
    ["Россельхозбанк", "rosselhoz", "Rosselhozbank"],
    ["ЮниКредит Банк", "unicreditbank", "UnicreditBank"],
    ["Промсвязьбанк", "promsviazbank", "Promsviazbank"],
    ["Другой банк", "anotherbank", "AnotherBank"],
    ["Наличные на руки", "cash", "Cash"],
  ];
  choseBank.length !== 0 ? setNextPage(true) : setNextPage(false);
  return (
    <div>
      <div className="Questions">На карту какого банка получаете зарплату?</div>
      <div className="BankVar">
        {bank.map((b) => (
          <label
            className={
              choseBank === b[1] &&
              choseBank !== "anotherbank" &&
              choseBank !== "cash"
                ? "labelBank chosenBank"
                : (choseBank === "anotherbank" && b[1] === "anotherbank") ||
                  (choseBank === "cash" && b[1] === "cash")
                ? "labelBank chosenAnother"
                : "labelBank"
            }
          >
            <div
              className={b[2]}
              style={{
                height: "42px",
                width: "42px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            {b[0]}
            <input
              type="radio"
              value={b[1]}
              name="varOfBank"
              className="RadioBank"
              onChange={(e) => setChoseBank(e.target.value)}
            />
          </label>
        ))}
      </div>
      <Buttons />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    choseBank: state.choseBank,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setChoseBank: (value) => {
      dispatch(createChangeAction("choseBank", value));
    },
    setNextPage: (value) => {
      dispatch(createChangeAction("nextPage", value));
    },
  };
};
export const Banks = connect(mapStateToProps, mapDispatchToProps)(Banks_);
