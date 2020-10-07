import React, { useState, useEffect } from "react";

function NavBar() {
  const [error, setError] = useState(false);

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
    <div className="flex nav-head bg-dark  text-white justify-content-start p-4 align-items-center">
      Homework Checkbox
      <button onClick={handleError}>ShowError</button>
    </div>
  );
}

export default NavBar;
