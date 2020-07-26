import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { FirstPage } from "./FirstPage";
import { Fio } from "./Fio.js";
import { FamilyStatus } from "./FamilyStatus";
import { Information } from "./Information";
import { store } from "./Store.js";
import { Provider } from "react-redux";
import { Header } from "./Header.js";
import { Salary } from "./Salary.js";
import { Banks } from "./Banks.js";
import { Army } from "./Army.js";
import { FinalPage } from "./FinalPage.js";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Route path="/" exact>
            <FirstPage />
          </Route>
          <Route path="/birthplace">
            <Fio />
          </Route>
          <Route path="/selfinfo">
            <Information />
          </Route>
          <Route path="/salryinfo">
            <Salary />
          </Route>
          <Route path="/banks">
            <Banks />
          </Route>
          <Route path="/armyattitude">
            <Army />
          </Route>
          <Route path="/familystatus">
            <FamilyStatus />
          </Route>
          <Route path="/final">
            <FinalPage />
          </Route>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
