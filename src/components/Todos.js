import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content} </span>

          <i
            className="material-icons red-text right"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            close
          </i>
        </div>
      );
    })
  ) : (
    <p className="collection-item">You have no todos left!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
