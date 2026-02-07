import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }
  function decreaseNum() {
    setNum(num - 1);
  }
  function jump5Num() {
    setNum(num + 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>INCREASE</button>
      <button onClick={decreaseNum}>DECREASE</button>
      <button onClick={jump5Num}>INCREASE BY 5</button>
    </div>
  );
};

export default App;
