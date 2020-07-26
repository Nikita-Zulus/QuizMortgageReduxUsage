class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
    this.subscribers = [];
    this.dispatch = this.dispatch.bind(this);
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.subscribers.forEach((fn) => fn());
  }

  subscribe(fn) {
    this.subscribers.push(fn);
    return function () {
      this.subscribers = this.subscribers((currfn) => currfn !== fn);
    };
  }

  getState() {
    return this.state;
  }
}

export function createStore(reducer, initialState) {
  return new Store(reducer, initialState);
}
