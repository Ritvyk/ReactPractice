import React from "react";

export default function Footer(props) {
  let todos = props.todos;
  let count = 0;

  todos.forEach((todo) => {
    if (todo.completed) {
      count++;
    }
  });
  return (
    <div className="footer__notifier">
      {count === 5 ? (
        <div className="ml-2">
          <span className="badge badge-success">All Done :-)</span>
        </div>
      ) : (
        <div className="ml-2">
          <span className="badge badge-danger">
            {todos.length - count} left :-({" "}
          </span>
        </div>
      )}
    </div>
  );
}
