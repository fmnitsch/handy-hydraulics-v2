import { useRef, useState } from "react";

function PressureLoss({
  clear,
  calcScreenRef,
  ready,
  setReady,
  calcScreen2Ref,
  calcButtonRef,
  calcButton2Ref,
}) {
  // State for second calculator
  const [readyCalc2, setReadyCalc2] = useState(false);

  // Refs
  const qDischargeRef = useRef(null);
  const plLengthRef = useRef(null);
  const plDiamRef = useRef(null);
  const cRef = useRef(null);
  const pDischargeRef = useRef(null);
  const elevAddRef = useRef(null);
  const refsArray1 = [qDischargeRef, plLengthRef, plDiamRef, cRef];
  const refsArray2 = [pDischargeRef, elevAddRef];

  // Clear for second calc
  const clearCalc2 = (inputs) => {
    inputs.forEach((field) => (field.current.value = ""));
    calcScreen2Ref.current.classList.remove("active");
    calcScreen2Ref.current.innerHTML = "<span></span>";
    setReadyCalc2(false);
  };

  // Calculators
  const frictionLoss = (qDischarge, plLength, plDiam, c) => {
    return (
      ((4.52 * Math.pow(qDischarge, 1.85)) /
        (Math.pow(c, 1.85) * Math.pow(plDiam, 4.87))) *
      plLength
    );
  };

  const pSuppPsi = (fricLoss, pDischarge, elevAdd) => {
    return pDischarge + fricLoss + elevAdd * 0.433;
  };

  // Input handlers
  const prepCalculator = () => {
    if (
      qDischargeRef.current.value &&
      plLengthRef.current.value &&
      plDiamRef.current.value &&
      cRef.current.value &&
      !pDischargeRef.current.value &&
      !elevAddRef.current.value
    ) {
      setReady(true);
      setReadyCalc2(false);
    } else if (
      qDischargeRef.current.value &&
      plLengthRef.current.value &&
      plDiamRef.current.value &&
      cRef.current.value &&
      pDischargeRef.current.value &&
      elevAddRef.current.value
    ) {
      setReady(true);
      setReadyCalc2(true);
    } else {
      setReady(false);
      setReadyCalc2(false);
    }
  };

  // Click Handlers
  const onClickFricLoss = () => {
    if (ready) {
      const result = frictionLoss(
        +qDischargeRef.current.value,
        +plLengthRef.current.value,
        +plDiamRef.current.value,
        +cRef.current.value
      );
      calcScreenRef.current.classList.add("active");
      calcScreenRef.current.innerHTML = `<span>${result.toFixed(4)} psi</span>`;
    } else {
      return;
    }
  };

  const onClickPSupp = () => {
    if (readyCalc2) {
      const fricLoss = frictionLoss(
        +qDischargeRef.current.value,
        +plLengthRef.current.value,
        +plDiamRef.current.value,
        +cRef.current.value
      );

      const result = pSuppPsi(
        +fricLoss,
        +pDischargeRef.current.value,
        +elevAddRef.current.value
      );
      calcScreen2Ref.current.classList.add("active");
      calcScreen2Ref.current.innerHTML = `<span>${result.toFixed(
        3
      )} psi</span>`;
    } else {
      return;
    }
  };

  return (
    <section className="calculator">
      <h2>Pressure loss</h2>
      <hr></hr>
      <div id="double-calc-container">
        <div id="fric-loss-calc">
          <h2>Friction loss</h2>
          <div className="calc-screen" ref={calcScreenRef}>
            <span></span>
          </div>
          <div className="inputs-container">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="q-discharge">Q-discharge (gpm):</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      ref={qDischargeRef}
                      name="q-discharge"
                      className="input"
                      onChange={prepCalculator}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="PL-length">Length (ft):</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      ref={plLengthRef}
                      name="PL-length"
                      className="input"
                      onChange={prepCalculator}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="PL-diam">Diameter (in):</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      ref={plDiamRef}
                      name="PL-diam"
                      className="input"
                      onChange={prepCalculator}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="c">C:</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      ref={cRef}
                      name="c"
                      className="input"
                      onChange={prepCalculator}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              className={`calc-button ${ready ? "" : "inactive"}`}
              id="calc-friction-loss"
              onClick={onClickFricLoss}
              ref={calcButtonRef}
            >
              Calculate
            </button>
            <button
              onClick={() => clear(refsArray1)}
              className={`clear ${ready ? "" : "clear-inactive"}`}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="vl"></div>
        <div id="p-supp-calc">
          <h2>P-supp</h2>
          <div className="calc-screen" ref={calcScreen2Ref}>
            <span></span>
          </div>
          <div className="inputs-container">
            <label htmlFor="p-discharge">P-discharge (psi):</label>
            <input
              type="number"
              ref={pDischargeRef}
              name="p-discharge"
              className="input"
              onChange={prepCalculator}
            />
            <br></br>
            <label htmlFor="elev-add">Elevation add (ft):</label>
            <input
              type="number"
              ref={elevAddRef}
              name="elev-add"
              className="input"
              onChange={prepCalculator}
            />
            <br></br>
            <button
              type="button"
              className={`calc-button ${readyCalc2 ? "" : "inactive"}`}
              id="calc-pSupp-psi"
              onClick={onClickPSupp}
              ref={calcButton2Ref}
            >
              Calculate
            </button>
            <button
              onClick={() => clearCalc2(refsArray2)}
              className={`clear ${readyCalc2 ? "" : "clear-inactive"}`}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PressureLoss;
