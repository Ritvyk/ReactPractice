import React from "react";

import Todo from "./Todo";

export default function Content(props) {
  const handleComplete = (e) => {
    const todoId = parseInt(e.target.name);
    let Todos = props.todos;
    Todos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
    props.setTodos([...Todos]);
  };

  return (
    <div className="p-2 shadow shadow-sm d-flex flex-column">
      {props.todos.map((todo, index) => {
        return (
          <div key={index}>
            {/* <span>{index + 1}</span>{" "} */}
            <Todo todo={todo} handleComplete={handleComplete} />
          </div>
        );
      })}
    </div>
  );
}
