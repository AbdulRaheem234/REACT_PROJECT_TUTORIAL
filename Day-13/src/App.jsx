import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map((elem, idx) => {
          return (
            <h3 key={elem.id}>
              Hello, {elem.author} {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
}

export default App;
