import React, { useState } from "react";
import { createChangeAction } from "./Store.js";
import { connect } from "react-redux";
import { Buttons } from "./Buttons.js";

const statuses = ["single", "married", "devorced"];

const maleTranslation = {
  single: "Холост",
  married: "Женат",
  devorced: "В разводе",
};
const femaleTranslation = {
  single: "Не замужем",
  married: "Замужем",
  devorced: "В разводе",
};

export function FamilyStatus_({
  sex,
  familyStatus,
  setFamilyStatus,
  countChilds,
  setCountChilds,
  privilegeBirth,
  privilegeInvalid,
  setPrivilegeBirth,
  setPrivilegeInvalid,
  setNextPage,
}) {
  const [show, setShow] = useState(false);
  setNextPage(true);
  return (
    <div>
      <div className="Questions">Расскажите о семье</div>
      <label className="attitudeOfArmyLabel">
        <div className="armyText">Семейное положение</div>
        <input
          type="text"
          value={
            sex === "male"
              ? maleTranslation[familyStatus]
              : femaleTranslation[familyStatus]
          }
          name="familyStatus"
          className="attitudeOfArmy"
          onClick={() => setShow((prev) => !prev)}
        />
      </label>
      <div
        className="ArmyAttitude"
        style={{
          height: show ? "120px" : 0,
          border: show ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
          overflow: "hidden",
        }}
      >
        {statuses.map((status) => (
          <label className="labelAttitude">
            <div className="AttitudeText">
              {sex === "male"
                ? maleTranslation[status]
                : femaleTranslation[status]}
            </div>
            <input
              type="radio"
              className="radioAttitude"
              name="inputAttitude"
              value={status}
              onChange={(e) => setFamilyStatus(e.target.value)}
              onClick={() => setShow((prev) => !prev)}
            />
          </label>
        ))}
      </div>
      <div className="CounterWrapper">
        <button
          className="CountMinus"
          onClick={() =>
            setCountChilds(countChilds > 0 ? countChilds - 1 : countChilds)
          }
        >
          -
        </button>
        <label className="LabelCounter">
          <div className="CounterText">Дети младше 18 лет</div>
          <input
            type="text"
            value={countChilds}
            name="Counter"
            className="InputCounter"
          />
        </label>
        <button
          className="CountPlus"
          onClick={() => setCountChilds(countChilds + 1)}
        >
          +
        </button>
      </div>
      <div className="ChildsDetails">
        <label className="LabelDetail">
          <div
            className={!privilegeBirth ? "newCheckBox" : "newCheckBoxChecked"}
          >
            <input
              checked={privilegeBirth}
              type="checkbox"
              name="birth>=2018"
              value={privilegeBirth}
              className="checkDetail"
              onClick={() => setPrivilegeBirth(!privilegeBirth)}
            />
          </div>
          <div className="textBlock">
            <div className="boldText">
              Ребёнок родился в 2018 году или позже
            </div>
            <div className="GreyText">
              В этом случае Вам доступны программы с господдержкой
            </div>
          </div>
        </label>
        <label className="LabelDetail">
          <div
            className={!privilegeInvalid ? "newCheckBox" : "newCheckBoxChecked"}
          >
            <input
              checked={privilegeInvalid}
              type="checkbox"
              name="invalid"
              value={privilegeInvalid}
              className="checkDetail"
              onClick={() => setPrivilegeInvalid(!privilegeInvalid)}
            />
          </div>
          <div className="textBlock">
            <div className="boldText">У ребёнка инвалидность</div>
            <div className="GreyText">
              В этом случае Вам доступны программы с господдержкой
            </div>
          </div>
        </label>
      </div>
      <Buttons />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sex: state.sex,
    familyStatus: state.familyStatus,
    countChilds: state.countChilds,
    privilegeBirth: state.privilegeBirth,
    privilegeInvalid: state.privilegeInvalid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setFamilyStatus: (value) => {
      dispatch(createChangeAction("familyStatus", value));
    },
    setCountChilds: (value) => {
      dispatch(createChangeAction("countChilds", value));
    },
    setPrivilegeBirth: (value) => {
      dispatch(createChangeAction("privilegeBirth", value));
    },
    setPrivilegeInvalid: (value) => {
      dispatch(createChangeAction("privilegeInvalid", value));
    },
    setNextPage: (value) => {
      dispatch(createChangeAction("nextPage", value));
    },
  };
};

export const FamilyStatus = connect(
  mapStateToProps,
  mapDispatchToProps
)(FamilyStatus_);

/* 
export const FamilyStatus = connect((state) => ({ value: state.sex }))(
  FamilyStatus_
);
 */
