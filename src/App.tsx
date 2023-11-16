import { useEffect, useState } from "react";
import "./App.css";
import iconDice from "./assets/images/icon-dice.svg";
import opening from "./assets/openingQuote.svg";
import closing from "./assets/closingQuote.svg";

function App() {
  // Interface for data being fetched
  interface AdviceData {
    id: number;
    advice: string;
  }

  const API: string = "https://api.adviceslip.com/";
  const [data, setData] = useState<AdviceData>();
  useEffect(() => {
    fetch(`${API}advice`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setData(data.slip));
  }, []);

  const FetchRandom = () => {
    fetch(`${API}advice`)
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
          {/* <h1>
            <img src={opening} alt="opening" className="quote" />
            {data && data.advice}
            <img src={closing} alt="closing" className="quote" />
          </h1> */}
          <h1>
            <span className="quote first">
              <img src={opening} alt="opening" />
            </span>
            <span className="text">{data && data.advice}</span>
            <span className="quote">
              <img src={closing} alt="closing" />
            </span>
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
