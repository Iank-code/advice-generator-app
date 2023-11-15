import "./App.css";
import iconDice from "./assets/images/icon-dice.svg"

function App() {
  return (
    <div className="advice-body">
      <div className="container">
        <h3>{`Advice #`}</h3>
        <h1>{"Some text"}</h1>

        <div className="divider-tab">
          <hr className="divider" />
          <div className="vertical-divider-tab">
            <hr className="vertical-divider" />
            <hr className="vertical-divider" />
          </div>
          <hr className="divider" />
        </div>

        <div className="icon">
          <img src={iconDice} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
