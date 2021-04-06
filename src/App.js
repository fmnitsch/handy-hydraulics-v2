import React, { useState, useRef } from "react";
//Import Styles
import "./Styles/App.scss";
import Selector from "./Components/selector/selector";
import CalcContainer from "./Components/calculators/calc-container";
import SavedCalcs from "./Components/saved-calcs/saved-calcs";

function App() {
  //State
  const [calcDisplay, setCalcDisplay] = useState(null);
  const [selector, setSelector] = useState(false);
  const [savedCalcs, setSavedCalcs] = useState([]);

  //Refs
  const calcTextRef = useRef(null);
  const calcTextRef2 = useRef(null);
  const calcScreenRef = useRef(null);
  const calcScreen2Ref = useRef(null);
  const calcButtonRef = useRef(null);
  const calcButton2Ref = useRef(null);
  const saveButtonRef = useRef(null);
  const saveButton2Ref = useRef(null);

  return (
    <div id="App">
      <div className="title">
        <h1>Handy Hydraulics</h1>
        <div className="tagline">
          <p>
            <i>The go-to resource for fire protection engineers</i>
          </p>
        </div>
      </div>
      <div className="calculators">
        <Selector
          selector={selector}
          setSelector={setSelector}
          calcDisplay={calcDisplay}
          setCalcDisplay={setCalcDisplay}
        />
        <div className={`calcs-wrapper ${selector ? "selector-active" : ""}`}>
          <CalcContainer
            calcDisplay={calcDisplay}
            calcScreenRef={calcScreenRef}
            calcScreen2Ref={calcScreen2Ref}
            calcTextRef={calcTextRef}
            calcTextRef2={calcTextRef2}
            selector={selector}
            setSelector={setSelector}
            calcButtonRef={calcButtonRef}
            calcButton2Ref={calcButton2Ref}
            saveButtonRef={saveButtonRef}
            saveButton2Ref={saveButton2Ref}
            savedCalcs={savedCalcs}
            setSavedCalcs={setSavedCalcs}
          />
          <SavedCalcs savedCalcs={savedCalcs} setSavedCalcs={setSavedCalcs} />
        </div>
      </div>
    </div>
  );
}

export default App;
