import React from "react";

function Todo({ todo, handleComplete }) {
  return (
    <div>
      <div className="flx p-2 shadow shadow-sm bg-white d-flex justify-content-start align-items-center">
        <p className="todo todo__left"> {todo.work}</p>
        <div className="indicator">
          <div className="todo todo__right ml-2">
            <input name={todo.id} type="checkbox" onChange={handleComplete} />
          </div>
          {todo.completed ? (
            <div className="ml-2">
              <span className="badge badge-success">Done</span>
            </div>
          ) : (
            <div className="ml-2">
              <span className="badge badge-danger">Not done</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Todo;
