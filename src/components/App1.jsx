import React from "react";

function App() {
    const monsters = ["Linda", "Frank", "Jackie"];

  return (
    <div className="container">
      <h1>Monsters Inc.</h1>
      {monsters.map(monster => {
        return <div className="card">{monster}</div>;
      })}
    </div>
  );
}

export default App;
