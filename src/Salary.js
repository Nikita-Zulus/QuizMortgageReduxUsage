import React from "react";
import { Buttons } from "./Buttons.js";
import { createChangeAction } from "./Store.js";
import { connect } from "react-redux";

function Salary_({
  averagesalary,
  confirmsalary,
  setAveragesalary,
  setConfirmsalary,
  setNextPage,
}) {
  /* averagesalary.length !== 0 ? setNextPage(true) : setNextPage(false); */
  setNextPage(true);
  return (
    <div>
      <div className="Questions">Ваш ежемесячный доход</div>
      <div className="GreyText info">
        Средняя сумма, которую Вы
        <br />
        получаете на руки в месяц
      </div>

      <label className="formBlock">
        Средний ежемесячный доход
        <input
          value={averagesalary}
          placeholder="руб."
          type="text"
          className="form"
          onChange={(e) => setAveragesalary(e.target.value)}
        />
      </label>
      <div className="sallaryBlock">
        <div className="RadiobuttonsSalary">
          <label
            className={
              confirmsalary === "NDFL"
                ? "ImageLabel Ndfl chosen"
                : "ImageLabel NdflGrey"
            }
          >
            <input
              value="NDFL"
              type="radio"
              name="salaryAccept"
              onChange={(e) => setConfirmsalary(e.target.value)}
              className="RadioSalary"
            />
            <div>2НДФЛ</div>
          </label>
          <label
            className={
              confirmsalary === "FormBank"
                ? "ImageLabel formBankRed chosen"
                : "ImageLabel formBank"
            }
          >
            <input
              value="FormBank"
              type="radio"
              name="salaryAccept"
              onChange={(e) => setConfirmsalary(e.target.value)}
              className="RadioSalary"
            />
            <div>Форма банка</div>
          </label>
          <label
            className={
              confirmsalary === "NoWay"
                ? "ImageLabel noWay chosen"
                : "ImageLabel noWay"
            }
          >
            <input
              value="NoWay"
              type="radio"
              name="salaryAccept"
              onChange={(e) => setConfirmsalary(e.target.value)}
              className="RadioSalary"
            />
            <div>Никак</div>
          </label>
        </div>
        <div>
          {confirmsalary === "NDFL" && (
            <div className="textItalic">
              У Вас полностью "белый" доход, что обычно обеспечивает самые
              выгодные предложения банков.
              <br />
              <br />
              Если существенная часть Ваших доходов не отражается в 2НДФЛ...
            </div>
          )}
          {confirmsalary === "FormBank" && (
            <div className="textItalic">Подтверждение через форму банка</div>
          )}
          {confirmsalary === "NoWay" && (
            <div className="textItalic"> Не могу подтвердить</div>
          )}
        </div>
      </div>
      <Buttons />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    averagesalary: state.averagesalary,
    confirmsalary: state.confirmsalary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAveragesalary: (value) => {
      dispatch(createChangeAction("averagesalary", value));
    },
    setConfirmsalary: (value) => {
      dispatch(createChangeAction("confirmsalary", value));
    },
    setNextPage: (value) => {
      dispatch(createChangeAction("nextPage", value));
    },
  };
};

export const Salary = connect(mapStateToProps, mapDispatchToProps)(Salary_);
