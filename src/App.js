import React, { useState, useRef } from "react";
//Import Styles
import "./Styles/App.scss";
import Selector from "./Components/selector/selector";
import CalcContainer from "./Components/calculators/calc-container";

function App() {
  //State
  const [calcDisplay, setCalcDisplay] = useState(null);

  //Refs
  const calcScreenRef = useRef(null);

  const select = (e) => {
    const selectors = [
      document.getElementById("elev-press"),
      document.getElementById("orif-dis"),
      document.getElementById("pipe-vol"),
      document.getElementById("sprink-dis"),
      document.getElementById("press-loss"),
    ];

    selectors.forEach((element) => {
      element.style.backgroundColor = "revert";
    });

    e.target.style.backgroundColor = "#FFFFFF";
    setCalcDisplay(`${e.target.id}`);
  };

  return (
    <div id="App">
      <div className="title">
        <h1>Handy Hydraulics</h1>
      </div>
      <div id="calculators">
        <Selector select={select} />
        <CalcContainer
          calcDisplay={calcDisplay}
          calcScreenRef={calcScreenRef}
        />
      </div>
    </div>
  );
}

export default App;
