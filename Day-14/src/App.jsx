import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("HELLO WORLD, A ki value change ho gyi");
  }

  function bChanging() {
    console.log("HI THERE, B ki value change ho gyi");
  }

  useEffect(
    function () {
      aChanging();
    },
    [a],
  );

  useEffect(
    function () {
      bChanging();
    },
    [b],
  );

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Change B
      </button>
    </div>
  );
}

export default App;
