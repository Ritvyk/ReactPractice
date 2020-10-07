import React, { useState } from "react";
import "./App.css";

import NavBar from "./subcomponents/NavBar";
import Content from "./subcomponents/Content";
import Footer from "./subcomponents/footer";

function App() {
  const [todos, setTodos] = useState([
    {
      work: "Math",
      completed: false,
      id: 143,
    },
    {
      work: "Science",
      completed: false,
      id: 2123,
    },
    {
      work: "Social studies",
      completed: false,
      id: 133,
    },
    {
      work: "Hindi",
      completed: false,
      id: 43123,
    },
    {
      work: "English",
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

  return (
    <div className="App">
      <NavBar />

      <Content todos={todos} setTodos={setTodos} />
      <Footer todos={todos} />
    </div>
  );
}

export default App;
