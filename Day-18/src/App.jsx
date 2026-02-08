import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar setTheme={setTheme} theme={theme} />
    </div>
  );
}

export default App;
