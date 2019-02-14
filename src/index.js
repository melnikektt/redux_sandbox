import React from "react";
import ReactDOM from "react-dom";
import { actionObject } from "./actions";
import { change } from "./reducers";
import { createStore } from "redux";
import Counter from "./Counter";

const initialState = {
  first: "Hi",
  second: "Someone"
};

const store = createStore(change, initialState);

store.dispatch(actionObject("CHANGE_FIRST", "Hello"));
store.dispatch(actionObject("CHANGE_SECOND", "Friend"));

class App extends React.Component {
  render() {
    const { first, second } = store.getState();
    return (
      <div>
        {first} {second}
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
