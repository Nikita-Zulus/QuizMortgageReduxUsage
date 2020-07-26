const { createStore, applyMiddleware } = require("redux");

const inicialState = {
  pokemons: [],
  selectedSet: new Set(),
  async: {
    loading: true,
    error: null,
    data: null,
  },
};

const reducer = (state, action) => {
  if (action.type === "ADD_POKEMON") {
    return {
      ...state,
      pokemons: [...state.pokemons, action.payload],
    };
  }
  if (action.type === "REMOVE_POKEMON") {
    state.pokemons.filter((id) => id !== action.payload);
    return {
      ...state,
      pokemons,
    };
  }
  if (action.type === "ASYNC_START") {
    return {
      ...state,
      async: {
        loading: true,
        error: null,
      },
    };
  }
  if (action.type === "ASYNC_FAILURE") {
    return {
      ...state,
      async: {
        loading: false,
        error: action.payload,
      },
    };
  }

  return state;
};

export const asyncStart = () => ({ type: "ASYNC_START" });
export const asyncSuccess = (payload) => ({ type: "ASYNC_SUCCESS", payload });
export const asyncFailure = (payload) => ({ type: "ASYNC_FAILURE", payload });
//middleware
function withStringActions({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      if (typeof action === "object") {
        next(action);
      } else {
        next({ type: action });
      }
    };
  };
}
function logger({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.log("before", getState());
      console.log("action", action);
      next(action);
      console.log("after", getState());
      console.groupEnd(action.type);
    };
  };
}
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(withStringActions, logger)
);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});
/*
store.dispatch({
  type: "ADD_POKEMON",
  payload: { id: 1, name: "Pikachu" },
});
store.dispatch({
  type: "ADD_POKEMON",
  payload: { id: 5, name: "Bulbazavr" },
});
*/
const addPokemon = (pokemon) => ({
  //actionCreator
  type: "ADD_POKEMON",
  payload: pokemon,
});
store.dispatch(addPokemon({ id: 1, name: "Pikachu" }));
store.dispatch(addPokemon({ id: 5, name: "Bulbazavr" }));
store.dispatch({
  type: "REMOVE_POKEMON",
  payload: 5,
});
