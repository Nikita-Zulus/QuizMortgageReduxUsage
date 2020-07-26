import React, { createContext, useContext, useEffect, useState } from "react";

const context = createContext();
const ContextProvider = context.Provider;

const Provider = ({ store, children }) => {
  <ContextProvider value={store}>{children}</ContextProvider>;
};

const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
  return function Wrapper(props) {
    const store = useContext(context);
    const [state, initialState] = useState(store.getState());
    useEffect(() => {
      return store.subscribe(() => {
        setState(store.getState());
      });
    }, []);
    const reduxProps = mapStateToProps && mapStateToProps(state);
    const reduxDispatchToProps =
      mapDispatchToProps && mapDispatchToProps(store.dispatch);
    return <Component {...props} {...reduxProps} {...reduxDispatchToProps} />;
  };
};
