import React, { useState, useEffect } from "react";
import "./App.css";

import NavBar from "./subcomponents/NavBar";
import Content from "./subcomponents/Content";

function App() {
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([
    {
      work: "Homework",
      completed: false,
      id: 143,
    },
    {
      work: "Homework Science",
      completed: false,
      id: 2123,
    },
    {
      work: "Homework SS",
      completed: false,
      id: 133,
    },
    {
      work: "Homework Hindi",
      completed: false,
      id: 43123,
    },
    {
      work: "Homework English",
      completed: false,
      id: 5182,
    },
  ]);

  // useEffect(() => {
  //   alert("Todo Completed.");
  // });
  // useEffect(() => {
  //   console.log("Ill will render only  one time");
  // }, []);

  const handleError = (e) => {
    setError(true);
  };

  useEffect(() => {
    if (error === false) {
      return;
    }
    alert("Error!!!!!");
  }, [error]);

  return (
    <div className="App">
      <button onClick={handleError}>ShowError</button>
      <NavBar />

      <Content todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
