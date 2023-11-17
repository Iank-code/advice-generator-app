import { useEffect, useState } from "react";
import "./App.css";
import iconDice from "./assets/images/icon-dice.svg";

function App() {
  // Interface for data being fetched
  interface AdviceData {
    id: number;
    advice: string;
  }

  console.log(import.meta.env.VITE_ADVICE_API);
  const [data, setData] = useState<AdviceData>();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADVICE_API}advice`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setData(data.slip));
  }, []);

  const FetchRandom = () => {
    fetch(`${import.meta.env.VITE_ADVICE_API}advice`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setData(data.slip));
  };

  return (
    <div className="advice-body">
      {data && (
        <div className="container">
          <h3>{`Advice # ${data && data.id}`}</h3>
          <h1>
            <q className="text">{data && data.advice}</q>
          </h1>

          <div className="divider-tab">
            <hr className="divider" />
            <div className="vertical-divider-tab">
              <hr className="vertical-divider" />
              <hr className="vertical-divider" />
            </div>
            <hr className="divider" />
          </div>

          <button className="icon" onClick={() => FetchRandom()}>
            <img src={iconDice} alt="" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
