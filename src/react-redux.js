import React, { createContext, useContext, useEffect, useState } from "react";

const context = createContext();
const ContextProvider = context.Provider;

const Provider = ({ store, children }) => (
  <ContextProvider value={store}>{children}</ContextProvider>
);

const connect = {mapStateToProps} =>