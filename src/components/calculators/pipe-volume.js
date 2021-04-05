import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function PipeVolume({
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
  const pvDiamRef = useRef(null);
  const pvLengthRef = useRef(null);
  const refsArray = [pvDiamRef, pvLengthRef];

  // Calculator
  const pipeVolume = (pvDiam, pvLength) => {
    return 0.040799 * Math.pow(pvDiam, 2) * pvLength;
  };

  // Input handler
  const prepCalculator = () => {
    if (pvDiamRef.current.value && pvLengthRef.current.value) {
      setReady(true);
    } else {
      setReady(false);
    }
  };

  // Click Handler for calculation
  const onClick = () => {
    if (ready) {
      const result = pipeVolume(
        +pvDiamRef.current.value,
        pvLengthRef.current.value
      );
      calcScreenRef.current.classList.add("active");
      calcTextRef.current.innerText = `${result.toFixed(3)}`;
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
        `Diameter (in): ${pvDiamRef.current.value}`,
        `Length (ft): ${pvLengthRef.current.value}`,
      ],

      output: `${calcTextRef.current.innerText} US gal`,
      id: uuidv4(),
    };
    setSavedCalcs([...savedCalcs, calcInfo]);
  };

  return (
    <section className="calculator">
      <h2>Pipe Volume (US gal)</h2>
      <div className="calc-screen" ref={calcScreenRef}>
        <span ref={calcTextRef}></span>
        <button className="save-button" ref={saveButtonRef} onClick={saveCalc}>
          Save
        </button>
      </div>
      <div className="inputs-container">
        <div className="input-wrapper">
          <label htmlFor="PV-diam">Diameter (in):</label>
          <input
            type="number"
            ref={pvDiamRef}
            name="PV-diam"
            className="input"
            onChange={prepCalculator}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="PV-length">Length (ft):</label>
          <br></br>
          <input
            type="number"
            ref={pvLengthRef}
            name="PV-length"
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

export default PipeVolume;
