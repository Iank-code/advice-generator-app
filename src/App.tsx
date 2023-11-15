import { useEffect, useState } from "react";
import "./App.css";
import iconDice from "./assets/images/icon-dice.svg";

function App() {
  interface AdviceData {
    id: number;
    advice: string;
  }
  const API: string = "https://api.adviceslip.com/";
  // advice
  const [data, setData] = useState<AdviceData>();
  useEffect(() => {
    fetch(`${API}advice`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setData(data.slip));
  }, []);

  return (
    <div className="advice-body">
      {data && (
        <div className="container">
          <h3>{`Advice # ${data && data.id}`}</h3>
          <h1>{data && data.advice}</h1>

          <div className="divider-tab">
            <hr className="divider" />
            <div className="vertical-divider-tab">
              <hr className="vertical-divider" />
              <hr className="vertical-divider" />
            </div>
            <hr className="divider" />
          </div>

          <button className="icon">
            <img src={iconDice} alt="" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
