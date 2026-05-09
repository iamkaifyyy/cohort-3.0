import { useState, useEffect } from "react";
import "./App.css";
import { createLogger } from "vite";

function App() {
  const [inputValue, setInputValue ] = useState("");

  useEffect(() => {
    console.log("component rendered");
  }, []);

  return (
    <div>
      <input type="text" placeholder="TYpe something...." value={inputValue} onChange={(e)=>{
        setInputValue(e.target.value)
      }}>
      </input>
      <p>you typed: <strong>{inputValue}</strong></p>
    </div>
  )
}

export default App;
   