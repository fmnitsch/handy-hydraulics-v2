import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function ElevationPressure({
  clear,
  calcScreenRef,
  ready,
  setReady,
  calcButtonRef,
  saveButtonRef,
  savedCalcs,
  setSavedCalcs,
}) {
  // Refs
  const heightRef = useRef(null);
  const refsArray = [heightRef];

  // Calculator
  const elevationPressure = (height) => {
    return height * 0.433;
  };

  // Input handler
  const prepCalculator = (e) => {
    e.target.value ? setReady(true) : setReady(false);
  };

  // Click handler for calculation
  const onClick = () => {
    if (ready) {
      let result = elevationPressure(+heightRef.current.value);
      calcScreenRef.current.classList.add("active");
      calcScreenRef.current.innerHTML = `<span>${result.toFixed(3)} psi</span>`;
      saveButtonRef.current.classList.add("save-active");
    } else {
      return;
    }
  };

  // Click handler for saving calculation
  const saveCalc = () => {
    const calcInfo = {
      calculation: "Elevation Pressure",
      inputs: [`Height (ft): ${heightRef.current.value}`],
      output: calcScreenRef.current.innerText,
      id: uuidv4(),
    };
    setSavedCalcs([...savedCalcs, calcInfo]);
  };

  return (
    <section className="calculator">
      <h2>Elevation Pressure</h2>
      <div className="calc-screen" ref={calcScreenRef}>
        <span></span>
      </div>
      <div className="save-wrapper">
        <button className="save-button" ref={saveButtonRef} onClick={saveCalc}>
          save this calculation
        </button>
      </div>
      <div className="inputs-container">
        <div className="input-wrapper">
          <label htmlFor="height">Height (ft):</label>
          <input
            type="number"
            ref={heightRef}
            name="height"
            className="input"
            onChange={prepCalculator}
          />
        </div>
      </div>
      <div className="buttons-container">
        <button
          className={`calc-button ${ready ? "" : "inactive"}`}
          onClick={onClick}
          ref={calcButtonRef}
        >
          Calculate
        </button>
        <button
          onClick={() => clear(refsArray)}
          className={`clear ${ready ? "" : "clear-inactive"}`}
        >
          Clear
        </button>
      </div>
    </section>
  );
}

export default ElevationPressure;
