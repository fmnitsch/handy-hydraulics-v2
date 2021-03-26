import React, { useState, useRef } from "react";
//Import Styles
import "./Styles/App.scss";
import Selector from "./Components/selector/selector";
import CalcContainer from "./Components/calculators/calc-container";

function App() {
  //State
  const [calcDisplay, setCalcDisplay] = useState(null);
  const [selector, setSelector] = useState(false);

  //Refs
  const calcScreenRef = useRef(null);
  const calcScreen2Ref = useRef(null);

  return (
    <div id="App">
      <div className="title">
        <h1>Handy Hydraulics</h1>
      </div>
      <div className="calculators">
        <Selector
          selector={selector}
          setSelector={setSelector}
          calcDisplay={calcDisplay}
          setCalcDisplay={setCalcDisplay}
        />
        <CalcContainer
          calcDisplay={calcDisplay}
          calcScreenRef={calcScreenRef}
          calcScreen2Ref={calcScreen2Ref}
          selector={selector}
          setSelector={setSelector}
        />
      </div>
    </div>
  );
}

export default App;
