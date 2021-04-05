import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function SprinklerDischarge({
  clear,
  calcScreenRef,
  calcTextRef,
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
      calcTextRef.current.innerText = `${result.toFixed(1)}`;
      saveButtonRef.current.classList.add("save-active");
    } else {
      return;
    }
  };

  // Click handler for saving calculation
  const saveCalc = () => {
    const calcInfo = {
      calculation: "Sprinkler Discharge",
      inputs: [
        `K: ${kRef.current.value}`,
        `Pressure (psi): ${pressPSIRef.current.value}`,
      ],

      output: `${calcTextRef.current.innerText} gpm`,
      id: uuidv4(),
    };
    setSavedCalcs([...savedCalcs, calcInfo]);
  };

  return (
    <section className="calculator">
      <h2>Sprinkler Discharge (gpm)</h2>
      <div className="calc-screen" ref={calcScreenRef}>
        <span ref={calcTextRef}></span>
        <button className="save-button" ref={saveButtonRef} onClick={saveCalc}>
          Save
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
