import React from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

import "./styles.css";

class TodoList extends React.Component {
  state = {
    todos: [
      {
        id: 0,
        title: "First todo",
        completed: false
      },
      {
        id: 1,
        title: "Second todo",
        completed: false
      },
      {
        id: 2,
        title: "Third todo",
        completed: false
      }
    ]
  };

  checkComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      id: Date.now() + Math.random(),
      title: event.target["add-todo"].value,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
    event.target.reset();
  };

  componentDidMount() {}

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  editTodo = id => {
    console.log("editing");
  };

  render() {
    return (
      <Todos
        todos={this.state.todos}
        checkComplete={this.checkComplete}
        addTodo={this.addTodo}
        deleteTodo={this.deleteTodo}
        editTodo={this.editTodo}
      />
    );
  }
}

class Game extends React.Component {
  render() {
    return <h1>Game</h1>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Game />, rootElement);
