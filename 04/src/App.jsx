import { useState } from "react";
import RndmValue from "./components/RndmValue";
import RndmTextColor from "./components/RndmTextColor";

function App() {
  const [values, setValues] = useState([1, 2, 3, 4]);

  const pushRandomValue = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    setValues([...values, randomNumber]);
  }

  return (
    <div>
      <button onClick={pushRandomValue}>Add random value</button>
      <ul>
        {values.map((value, i) => (
          <li key={i}>{value}</li>
        ))}
      </ul>

      <RndmValue />

      <RndmTextColor />
    </div>
  )
}

export default App;
