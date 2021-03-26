import { useRef } from "react";

function OrificeDischarge({ clear, calcScreenRef, ready, setReady }) {
  // Refs
  const orificeRef = useRef(null);
  const cFactRef = useRef(null);
  const psiRef = useRef(null);

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

  // Click handler
  const onClick = () => {
    const result = orificeDischarge(
      +orificeRef.current.value,
      +cFactRef.current.value,
      +psiRef.current.value
    );
    calcScreenRef.current.innerHTML = `<span>${result} gpm</span>`;
  };

  return (
    <section className="calculator">
      <h2>Orifice Discharge</h2>
      <div className="calc-screen" ref={calcScreenRef}>
        <span>0</span>
      </div>
      <div className="inputs-container">
        <label htmlFor="orifice">Orifice (in):</label>
        <br></br>
        <input
          ref={orificeRef}
          name="orifice"
          className="input"
          onChange={prepCalculator}
        />
        <br></br>
        <label htmlFor="cfact">C-fact.:</label>
        <br></br>
        <input
          ref={cFactRef}
          name="cfact"
          className="input"
          onChange={prepCalculator}
        />
        <br></br>
        <label htmlFor="psi">PSI:</label>
        <br></br>
        <input
          ref={psiRef}
          name="psi"
          className="input"
          onChange={prepCalculator}
        />
        <br></br>
        <button
          className={`calc-button ${ready ? "" : "inactive"}`}
          onClick={onClick}
        >
          Calculate
        </button>
        <button onClick={clear} className="clear">
          Clear
        </button>
      </div>
    </section>
  );
}

export default OrificeDischarge;
