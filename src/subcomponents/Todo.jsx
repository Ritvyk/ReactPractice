import React from "react";

function Todo({ todo, handleComplete }) {
  return (
    <div>
      <div className="p-2 shadow shadow-sm bg-white d-flex justify-content-start align-items-center">
        <p> {todo.work}</p>
        <div className="ml-2">
          <input name={todo.id} type="checkbox" onChange={handleComplete} />
        </div>
        {todo.completed ? (
          <div className="ml-2">
            <span className="badge badge-success">Completed</span>
          </div>
        ) : (
          <div className="ml-2">
            <span className="badge badge-danger">Not Completed</span>
          </div>
        )}
      </div>
    </div>
  );
}
export default Todo;
