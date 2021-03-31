import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function SprinklerDischarge({
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
  const kRef = useRef(null);
  const pressPSIRef = useRef(null);
  const refsArray = [kRef, pressPSIRef];

  // Calculation
  const sprinklerDischarge = (k, pressPSI) => {
    return Math.sqrt(pressPSI) * k;
  };

  // Input handler
  const prepCalculator = () => {
    if (kRef.current.value && pressPSIRef.current.value) {
      setReady(true);
    } else {
      setReady(false);
    }
  };

  // Click Handler for calculation
  const onClick = () => {
    if (ready) {
      const result = sprinklerDischarge(
        +kRef.current.value,
        +pressPSIRef.current.value
      );
      calcScreenRef.current.classList.add("active");
      calcScreenRef.current.innerHTML = `<span>${result.toFixed(1)} gpm</span>`;
      saveButtonRef.current.classList.add("save-active");
    } else {
      return;
    }
  };

  // Click handler for saving calculation
  const saveCalc = () => {
    const calcInfo = {
      calculation: "Pipe Volume",
      inputs: [
        `K: ${kRef.current.value}`,
        `Pressure (psi): ${pressPSIRef.current.value}`,
      ],

      output: calcScreenRef.current.innerText,
      id: uuidv4(),
    };
    setSavedCalcs([...savedCalcs, calcInfo]);
  };

  return (
    <section className="calculator">
      <h2>Sprinkler Discharge</h2>
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
          <label htmlFor="k">K:</label>
          <input
            type="number"
            ref={kRef}
            name="k"
            className="input"
            onChange={prepCalculator}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="pressure-psi">Pressure (psi):</label>
          <input
            type="number"
            ref={pressPSIRef}
            name="pressure-psi"
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

export default SprinklerDischarge;
