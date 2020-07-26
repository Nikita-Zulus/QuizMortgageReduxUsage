import React from "react";
import { createChangeAction } from "./Store.js";
import { connect } from "react-redux";
import { Buttons } from "./Buttons.js";

export function Fio_({
  sex,
  setSex,
  setBirthday,
  setBirthplace,
  birthday,
  birthplace,
  setNextPage,
}) {
  console.log(birthday, birthplace);
  birthday.length !== 0 || birthplace.length !== 0
    ? setNextPage(true)
    : setNextPage(false);
  return (
    <div>
      <div className="Questions">Расскажите о себе</div>
      <div className="MaleFemale">
        <label>
          <div
            style={{
              height: "30px",
              width: "120px",
              background: sex === "male" ? "brown" : "#e9e9e9",
              color: sex === "male" ? "#e9e9e9" : "brown",
              borderRadius: "4px",
              lineHeight: "25px",
              marginBottom: "25px",
            }}
          >
            Мужчина
          </div>
          <input
            checked={sex === "male"}
            type="radio"
            value="male"
            name="sex"
            onClick={() => setSex("male")}
            style={{ display: "none" }}
          />
        </label>
        <label>
          <div
            style={{
              background: sex === "female" ? "brown" : "#e9e9e9",
              color: sex === "female" ? "#e9e9e9" : "brown",
              height: "30px",
              width: "120px",
              borderRadius: "4px",
              lineHeight: "25px",
            }}
          >
            Женщина
          </div>
          <input
            checked={sex === "female"}
            type="radio"
            value="female"
            name="sex"
            onClick={() => setSex("female")}
            style={{ display: "none" }}
          />
        </label>
      </div>
      <label className="formBlock">
        Дата рождения
        <input
          value={birthday}
          type="text"
          name="birthday"
          className="form"
          placeholder="12.12.1999"
          onChange={(e) => setBirthday(e.target.value)}
        />
      </label>
      <label className="formBlock">
        Место рождения
        <input
          value={birthplace}
          type="text"
          name="birthplace"
          className="form"
          placeholder="Moscow"
          onChange={(e) => setBirthplace(e.target.value)}
        />
      </label>
      <Buttons />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sex: state.sex,
    birthday: state.birthday,
    birthplace: state.birthplace,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSex: (value) => {
      dispatch(createChangeAction("sex", value));
    },
    setBirthday: (value) => {
      dispatch(createChangeAction("birthday", value));
    },
    setBirthplace: (value) => {
      dispatch(createChangeAction("birthplace", value));
    },
    setNextPage: (value) => {
      dispatch(createChangeAction("nextPage", value));
    },
  };
};

export const Fio = connect(mapStateToProps, mapDispatchToProps)(Fio_);
