import { createStore } from "redux";

const initialState = {
  secondName: "",
  firstName: "",
  patronymic: "",
  sex: "male",
  birthday: "",
  birthplace: "",
  averagesalary: "",
  confirmsalary: "NDFL",
  choseBank: "",
  currAttitude: "noserve",
  familyStatus: "single",
  countChilds: 0,
  privilegeBirth: false,
  privilegeInvalid: false,
  phone: "",
  email: "",
  okcreditreport: false,
  okadvertcommunic: false,
  oksavedata: false,
  nopublicfamily: false,
  smsaprove: false,
  nextPage: false,
};

function reducer(state, action) {
  if (action.type === "CHANGE") {
    return {
      ...state,
      [action.payload.key]: action.payload.value,
    };
  }
  return state;
}

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export function createChangeAction(key, value) {
  return {
    type: "CHANGE",
    payload: {
      key,
      value,
    },
  };
}
