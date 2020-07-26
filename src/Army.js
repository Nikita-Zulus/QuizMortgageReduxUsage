import React, { useState } from "react";
import { Buttons } from "./Buttons.js";
import { createChangeAction } from "./Store.js";
import { connect } from "react-redux";

function Army_({ currAttitude, firstName, setCurrAttitude, setNextPage }) {
  const attitudeVars = [
    ["Невоеннообязанный", "nonmilitary"],
    ["Не служил", "noserve"],
    ["Отсрочка от службы", "deferral"],
    ["Военнослужащий", "liable"],
    ["Женат, есть брачный договор", "marriagecontract"],
  ];
  const translateAttitude = {
    nonmilitary: "Невоеннообязанный",
    noserve: "Не служил",
    deferral: "Отсрочка от службы",
    liable: "Военнослужащий",
    marriagecontract: "Женат, есть брачный договор",
  };
  const [show, setShow] = useState(false);
  /*  currAttitude.length !== 0 ? setNextPage(true) : setNextPage(false); */
  setNextPage(true);
  return (
    <div>
      <div className="Questions">
        {firstName.length === 0
          ? "Расскажите про Ваше отношение к воинской службе"
          : `${firstName}, расскажите про Ваше отношение к воинской службе`}
      </div>
      <label className="attitudeOfArmyLabel">
        <div className="armyText">Ваш статус военнообязанного</div>
        <input
          type="text"
          value={translateAttitude[currAttitude]}
          name="attitude"
          className="attitudeOfArmy"
          onClick={() => setShow((prev) => !prev)}
        />
      </label>
      <div
        className="ArmyAttitude"
        style={{
          height: show ? "202px" : 0,
          border: show ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
          overflow: "hidden",
        }}
      >
        {attitudeVars.map((x) => (
          <label className="labelAttitude">
            <div className="AttitudeText">{x[0]}</div>
            <input
              type="radio"
              className="radioAttitude"
              name="inputAttitude"
              value={x[1]}
              onChange={(e) => setCurrAttitude(e.target.value)}
              onClick={() => setShow((prev) => !prev)}
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
    firstName: state.firstName,
    currAttitude: state.currAttitude,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrAttitude: (value) => {
      dispatch(createChangeAction("currAttitude", value));
    },
    setNextPage: (value) => {
      dispatch(createChangeAction("nextPage", value));
    },
  };
};

export const Army = connect(mapStateToProps, mapDispatchToProps)(Army_);
