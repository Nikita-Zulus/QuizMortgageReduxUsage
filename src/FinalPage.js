import React from "react";
import { Buttons } from "./Buttons.js";
import { createChangeAction } from "./Store.js";
import { connect } from "react-redux";
import { store } from "./Store.js";

function FinalPage_({
  phone,
  email,
  setEmail,
  setPhone,
  smsaprove,
  okadvertcommunic,
  okcreditreport,
  oksavedata,
  nopublicfamily,
  setNopublicfamily,
  setOkadvertcommunic,
  setOkcreditreport,
  setOksavedata,
  setSmsaprove,
}) {
  const final = [
    ["Согласие на кредитный отчёт", okcreditreport, setOkcreditreport],
    [
      "Согласие на рекламную коммуникацию",
      okadvertcommunic,
      setOkadvertcommunic,
    ],
    ["Согласие на хранение данных", oksavedata, setOksavedata],
    ["Нет родственных публичный лиц", nopublicfamily, setNopublicfamily],
  ];
  console.log(store.getState());
  return (
    <div>
      <div className="Questions">Проверьте контакты</div>
      <div className="GreyText info">
        Убедитесь, что контакты введены
        <br />
        корректно,они будут использоваться
        <br />
        банками для коммуникации с Вами
      </div>
      <label className="formBlock">
        Фаш телефон
        <input
          value={phone}
          type="tel"
          className="form"
          placeholder="7(999)999-99-99"
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label className="formBlock">
        Ваша почта
        <input
          value={email}
          type="email"
          className="form"
          placeholder="mail@mail.ru"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {final.map((f) => (
        <div className="ChildsDetails final">
          <label className="LabelDetail">
            <div className={!f[1] ? "newCheckBox" : "newCheckBoxChecked"}>
              <input
                checked={f[1]}
                type="checkbox"
                name={f[1]}
                value={f[1]}
                className="checkDetail"
                onClick={() => f[2](!f[1])}
              />
            </div>
            <div className="boldText normal">{f[0]}</div>
          </label>
        </div>
      ))}
      <div className="ChildsDetails final">
        <label className="LabelDetail">
          <div className={!smsaprove ? "newCheckBox" : "newCheckBoxChecked"}>
            <input
              checked={smsaprove}
              type="checkbox"
              name="smsaprove"
              value={smsaprove}
              className="checkDetail"
              onClick={() => setSmsaprove(!smsaprove)}
            />
          </div>
          <div className="boldText">Подтверждение по СМС</div>
        </label>
      </div>
      <Buttons />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    phone: state.phone,
    email: state.email,
    okcreditreport: state.okcreditreport,
    okadvertcommunic: state.okadvertcommunic,
    oksavedata: state.oksavedata,
    nopublicfamily: state.nopublicfamily,
    smsaprove: state.smsaprove,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPhone: (value) => {
      dispatch(createChangeAction("phone", value));
    },
    setEmail: (value) => {
      dispatch(createChangeAction("email", value));
    },
    setOkcreditreport: (value) => {
      dispatch(createChangeAction("okcreditreport", value));
    },
    setOkadvertcommunic: (value) => {
      dispatch(createChangeAction("okadvertcommunic", value));
    },
    setOksavedata: (value) => {
      dispatch(createChangeAction("oksavedata", value));
    },
    setNopublicfamily: (value) => {
      dispatch(createChangeAction("nopublicfamily", value));
    },
    setSmsaprove: (value) => {
      dispatch(createChangeAction("smsaprove", value));
    },
  };
};

export const FinalPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalPage_);
