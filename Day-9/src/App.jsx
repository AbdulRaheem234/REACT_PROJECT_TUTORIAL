import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function increase5Num() {
    setNum(num + 5);
  }

  function decrease5Num() {
    setNum(num - 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>INCREASE</button>
      <button onClick={decreaseNum}>DECREASE</button>
      <button onClick={increase5Num}>INCREASE BY 5</button>
      <button onClick={decrease5Num}>DECREASE BY 5</button>
    </div>
  );
}

export default App;
