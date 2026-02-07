import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    message: "",
  });

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={changeHandler}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          value={formData.age}
          onChange={changeHandler}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
