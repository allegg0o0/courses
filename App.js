import Fu from "./Fu";
import React, {useState } from "react";


function App() {
  
  const [counter, setCounter] = useState(0);
  let Inc = () =>
  {
    setCounter(counter+1)
  };
  let Dec = () =>
  {
    setCounter(counter-1)
  };
  let Nuller = () =>
  {
    setCounter(0)
  };
  return (
    <div className="App">
    <Fu name="All_egg"/>
    <div>
    <h1>{counter}</h1>
    <button onClick={Inc}>+</button>
    <button onClick={Dec}>-</button>
    <button onClick={Nuller}>0</button>
    </div>
    </div>
  );
}

export default App;
