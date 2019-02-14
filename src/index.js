import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Components/Counter";
// import ReduxSandbox from "./Components/ReduxSandbox";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
