import React from "react";

function Food({ name }) {
  return <h2>I like {name}!!!</h2>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Food name="chicken" />
      <Food name="Kimchi" />
      <Food name="Hot Noodle" />
    </div>
  );
}

export default App;
