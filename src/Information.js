import React from "react";
import { Buttons } from "./Buttons.js";
import { createChangeAction } from "./Store.js";
import { connect } from "react-redux";

function Information_({
  setFirstName,
  setSecondName,
  setPatronymic,
  firstName,
  secondName,
  patronymic,
  setNextPage,
}) {
  firstName.length !== 0 || secondName.length !== 0 || patronymic.length !== 0
    ? setNextPage(true)
    : setNextPage(false);
  return (
    <div>
      <div className="Questions">Как Вас зовут?</div>
      <div className="GreyText info">
        Заполните как в паспорте,
        <br />
        это важно для банков
      </div>

      <label className="formBlock">
        Фамилия
        <input
          value={secondName}
          type="text"
          className="form"
          placeholder="Иванов"
          onChange={(e) => setSecondName(e.target.value)}
        />
      </label>
      <label className="formBlock">
        Имя
        <input
          value={firstName}
          type="text"
          className="form"
          placeholder="Иван"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label className="formBlock">
        Отчество
        <input
          value={patronymic}
          type="text"
          className="form"
          placeholder="Иванович"
          onChange={(e) => setPatronymic(e.target.value)}
        />
      </label>
      <Buttons />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    secondName: state.secondName,
    firstName: state.firstName,
    patronymic: state.patronymic,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSecondName: (value) => {
      dispatch(createChangeAction("secondName", value));
    },
    setFirstName: (value) => {
      dispatch(createChangeAction("firstName", value));
    },
    setPatronymic: (value) => {
      dispatch(createChangeAction("patronymic", value));
    },
    setNextPage: (value) => {
      dispatch(createChangeAction("nextPage", value));
    },
  };
};

export const Information = connect(
  mapStateToProps,
  mapDispatchToProps
)(Information_);
