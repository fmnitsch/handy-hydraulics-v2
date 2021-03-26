import { useRef } from "react";

function SprinklerDischarge({ clear, calcScreenRef, ready, setReady }) {
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

  // Click Handler
  const onClick = () => {
    const result = sprinklerDischarge(
      +kRef.current.value,
      +pressPSIRef.current.value
    );
    calcScreenRef.current.classList.add("active");
    calcScreenRef.current.innerHTML = `<span>${result.toFixed(1)} gpm</span>`;
  };

  return (
    <section className="calculator">
      <h2>Sprinkler Discharge</h2>
      <div className="calc-screen" ref={calcScreenRef}>
        <span></span>
      </div>
      <div className="inputs-container">
        <label htmlFor="k">K:</label>
        <br></br>
        <input
          ref={kRef}
          name="k"
          className="input"
          onChange={prepCalculator}
        />
        <br></br>
        <label htmlFor="pressure-psi">Pressure (psi):</label>
        <br></br>
        <input
          ref={pressPSIRef}
          name="pressure-psi"
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
        <button onClick={() => clear(refsArray)} className="clear">
          Clear
        </button>
      </div>
    </section>
  );
}

export default SprinklerDischarge;
