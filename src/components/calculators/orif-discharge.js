import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function OrificeDischarge({
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
  const orificeRef = useRef(null);
  const cFactRef = useRef(null);
  const psiRef = useRef(null);
  const refsArray = [orificeRef, cFactRef, psiRef];

  // Calculator
  const orificeDischarge = (orifice, cFact, psi) => {
    return Math.round(29.83 * cFact * (orifice * orifice) * Math.sqrt(psi));
  };

  // Input handler
  const prepCalculator = () => {
    if (
      orificeRef.current.value &&
      cFactRef.current.value &&
      psiRef.current.value
    ) {
      setReady(true);
    } else {
      setReady(false);
    }
  };

  // Click handler for calculation
  const onClick = () => {
    if (ready) {
      const result = orificeDischarge(
        +orificeRef.current.value,
        +cFactRef.current.value,
        +psiRef.current.value
      );
      calcScreenRef.current.classList.add("active");
      calcTextRef.current.innerText = `${result}`;
      saveButtonRef.current.classList.add("save-active");
    } else {
      return;
    }
  };

  // Click handler for saving calculation
  const saveCalc = () => {
    const calcInfo = {
      calculation: "Orifice Discharge",
      inputs: [
        `Orifice (in): ${orificeRef.current.value}`,
        `C-fact.: ${cFactRef.current.value}`,
        `PSI: ${psiRef.current.value}`,
      ],

      output: `${calcTextRef.current.innerText} gpm`,
      id: uuidv4(),
    };
    setSavedCalcs([...savedCalcs, calcInfo]);
  };

  return (
    <section className="calculator">
      <h2>Orifice Discharge (gpm)</h2>
      <div className="calc-screen" ref={calcScreenRef}>
        <span ref={calcTextRef}></span>
        <button className="save-button" ref={saveButtonRef} onClick={saveCalc}>
          Save
        </button>
      </div>
      <div className="inputs-container">
        <div className="input-wrapper">
          <label htmlFor="orifice">Orifice (in):</label>
          <input
            type="number"
            ref={orificeRef}
            name="orifice"
            className="input"
            onChange={prepCalculator}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="cfact">C-fact.:</label>
          <input
            type="number"
            ref={cFactRef}
            name="cfact"
            className="input"
            onChange={prepCalculator}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="psi">PSI:</label>
          <input
            type="number"
            ref={psiRef}
            name="psi"
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

export default OrificeDischarge;
