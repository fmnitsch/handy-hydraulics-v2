import { useRef } from "react";

function PipeVolume({ clear, calcScreenRef, ready, setReady, calcButtonRef }) {
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

  // Click Handler
  const onClick = () => {
    if (ready) {
      const result = pipeVolume(
        +pvDiamRef.current.value,
        pvLengthRef.current.value
      );
      calcScreenRef.current.classList.add("active");
      calcScreenRef.current.innerHTML = `<span>${result.toFixed(
        3
      )} U.S. Gal</span>`;
    } else {
      return;
    }
  };

  return (
    <section className="calculator">
      <h2>Pipe Volume</h2>
      <div className="calc-screen" ref={calcScreenRef}>
        <span></span>
      </div>
      <div className="inputs-container">
        <label htmlFor="PV-diam">Diameter (in):</label>
        <br></br>
        <input
          type="number"
          ref={pvDiamRef}
          name="PV-diam"
          className="input"
          onChange={prepCalculator}
        />
        <br></br>
        <label htmlFor="PV-length">Length (ft):</label>
        <br></br>
        <input
          type="number"
          ref={pvLengthRef}
          name="PV-length"
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

export default PipeVolume;