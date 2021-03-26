import { useRef } from "react";

function ElevationPressure({ clear, calcScreenRef, ready, setReady }) {
  // Refs
  const heightRef = useRef(null);

  // Calculator
  const elevationPressure = (height) => {
    return height * 0.433;
  };

  // Input handler
  const prepCalculator = (e) => {
    e.target.value ? setReady(true) : setReady(false);
  };

  // Click handler
  const onClick = () => {
    if (ready) {
      let result = elevationPressure(+heightRef.current.value);
      calcScreenRef.current.innerHTML = `<span>${result.toFixed(3)} psi</span>`;
    } else {
      return;
    }
  };

  return (
    <section className="calculator">
      <h2>Elevation pressure</h2>
      <div className="calc-screen" ref={calcScreenRef}>
        <span>0</span>
      </div>
      <div className="inputs-container">
        <label htmlFor="height">Height (ft):</label>
        <br></br>
        <input
          ref={heightRef}
          name="height"
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

export default ElevationPressure;
