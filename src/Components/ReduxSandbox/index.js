import React from "react";
import { createStore } from "redux";
import actionObject from "./actions";
import reducer from "./reducers";

const initialState = {
  first: "Hi",
  second: "Someone"
};

const store = createStore(reducer, initialState);

store.dispatch(actionObject("CHANGE_FIRST", "Hello"));
store.dispatch(actionObject("CHANGE_SECOND", "Friend"));

class ReduxSandbox extends React.Component {
  render() {
    const { first, second } = store.getState();
    return (
      <React.Fragment>
        <p>
          {first} {second}
        </p>
      </React.Fragment>
    );
  }
}

export default ReduxSandbox;
