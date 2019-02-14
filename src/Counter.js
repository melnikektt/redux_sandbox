import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const initialState = {
  count: 0
};

const store = createStore(reducer, initialState);

function reducer(state = { count: 0 }, action = {}) {
  switch (action.type) {
    case "UP":
      return {
        ...state,
        count: state.count + 1
      };
    case "DOWN":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET":
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
}

function action(type) {
  return {
    type
  };
}

const unsubscribe = store.subscribe(() => {
  ReactDOM.render(<Counter />, document.getElementById("root"));
});

class Counter extends React.Component {
  handleClick = type => {
    store.dispatch(action(type));
  };

  render() {
    const { count } = store.getState();
    return (
      <React.Fragment>
        <p>Count: {count}</p>
        <button onClick={() => this.handleClick("UP")}>+</button>
        <button onClick={() => this.handleClick("DOWN")}>-</button>
        <button onClick={() => this.handleClick("RESET")}>reset</button>
      </React.Fragment>
    );
  }
}

export default Counter;
