import React from "react";
import Todo from "./Todo";

class Todos extends React.Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.addTodo}>
          <input
            className="todo-input"
            name="add-todo"
            type="text"
            placeholder="Enter something"
          />
          <button className="todo-btn" type="submit">
            Submit
          </button>
        </form>
        <ul className="todo-list">
          {this.props.todos.length ? (
            this.props.todos.map(todo => {
              return (
                <Todo
                  checkComplete={this.props.checkComplete}
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  deleteTodo={this.props.deleteTodo}
                  editTodo={this.props.editTodo}
                />
              );
            })
          ) : (
            <p className="todo-empty">There is nothing to show</p>
          )}
        </ul>
      </div>
    );
  }
}

export default Todos;
