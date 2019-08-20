import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class TodoComponent extends Component {
  state = {
    todos: [{ id: 1, content: "Have lunch" }, { id: 2, content: "Go outside for a walk" }]
  };

  deleteTodo = id => {
    const deletedTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: deletedTodos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    //put old data in with new data
    let newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div>
        <p>I followed a todo list tutorial to refresh my knowledge on Redux:</p>
        <p className="center blue-text">What do you need Todo today?</p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoComponent;
