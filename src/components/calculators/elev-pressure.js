import { useRef } from "react";

function ElevationPressure({
  clear,
  calcScreenRef,
  ready,
  setReady,
  calcButtonRef,
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

  // Click handler
  const onClick = () => {
    if (ready) {
      let result = elevationPressure(+heightRef.current.value);
      calcScreenRef.current.classList.add("active");
      calcScreenRef.current.innerHTML = `<span>${result.toFixed(3)} psi</span>`;
    } else {
      return;
    }
  };

  return (
    <section className="calculator">
      <h2>Elevation Pressure</h2>
      <div className="calc-screen" ref={calcScreenRef}>
        <span></span>
      </div>
      <div className="inputs-container">
        <label htmlFor="height">Height (ft):</label>
        <br></br>
        <input
          type="number"
          ref={heightRef}
          name="height"
          className="input"
          onChange={prepCalculator}
        />
        <br></br>
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
