import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createChangeAction } from "./Store.js";

let basisrouters = [
  { path: "/birthplace" },
  { path: "/selfinfo" },
  { path: "/salryinfo" },
  { path: "/banks" },
  { path: "/armyattitude", mansonly: true },
  { path: "/familystatus" },
  { path: "/final" },
];
function Buttons__(props) {
  let routers = basisrouters;
  if (props.sex === "female") {
    routers = basisrouters.filter((x) => x.mansonly !== true);
  }
  let currpath = props.match.path;
  let index = routers.findIndex((x) => x.path === currpath);
  let nextIndex = index + 1;
  let nextRoute = routers[nextIndex];
  let prevIndex = index - 1;
  let prevRoute = routers[prevIndex];
  console.log(index);
  console.log(props);
  return (
    <div>
      <div className="ButtonsElements">
        {index > 0 && (
          <Link className="ButtonPrev" to={prevRoute.path}>
            Назад
            <img src={require("./ArrowButtonLeft.svg")} alt="leftArrowImg" />
          </Link>
        )}
        {nextIndex === routers.length ? (
          <Link className="ButtonNext send" to="/">
            Отправить
          </Link>
        ) : props.nextPage ? (
          <Link
            className="ButtonNext"
            to={nextRoute.path}
            onClick={() => props.setNextPage(false)}
          >
            Далее
            <img src={require("./ArrowButtonRight.svg")} alt="rightArrowImg" />
          </Link>
        ) : (
          <Link className="ButtonNextGrey">
            Далее
            <img
              src={require("./GreyArrowButtonRight.svg")}
              alt="GreyRightArrowImg"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    sex: state.sex,
    birthplace: state.birthplace,
    nextPage: state.nextPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNextPage: (value) => {
      dispatch(createChangeAction("nextPage", value));
    },
  };
};

const Buttons_ = withRouter(Buttons__);

export const Buttons = connect(mapStateToProps, mapDispatchToProps)(Buttons_);
