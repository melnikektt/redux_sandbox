import React from "react";

const styles = {
  container: {
    display: "flex"
  },
  btn: {
    marginLeft: "auto",
    border: "none",
    width: "25px",
    background: "red",
    color: "white",
    cursor: "pointer"
  }
};

class Todo extends React.Component {
  state = {
    editState: false,
    value: ""
  };

  render() {
    const { id, checkComplete, completed, title, deleteTodo } = this.props;
    return (
      <li className="todo-item">
        {this.state.editState ? (
          <input type="text" value={title} />
        ) : (
          <React.Fragment>
            <div style={styles.container}>
              <input
                className="todo-check"
                type="checkbox"
                id={`todo-${id}`}
                onChange={checkComplete.bind(this, id)}
              />
              <label htmlFor={`todo-${id}`} />
              <p
                className={
                  completed ? "todo-text todo-text__completed" : "todo-text"
                }
              >
                {title}
              </p>
              <button onClick={deleteTodo.bind(this, id)} style={styles.btn}>
                X
              </button>
            </div>
            <span
              className={
                completed ? "todo-status todo-status__completed" : "todo-status"
              }
            >
              {completed ? "completed" : "incomplete"}
            </span>
          </React.Fragment>
        )}
      </li>
    );
  }
}

export default Todo;
