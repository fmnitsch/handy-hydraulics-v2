import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function PressureLoss({
  calcDisplay,
  clear,
  calcScreenRef,
  calcTextRef,
  calcTextRef2,
  ready,
  setReady,
  calcScreen2Ref,
  calcButtonRef,
  calcButton2Ref,
  saveButtonRef,
  saveButton2Ref,
  savedCalcs,
  setSavedCalcs,
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
    calcTextRef2.current.innerText = "";
    saveButton2Ref.current.classList.remove("save-active");
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

  // Click Handlers for calculations
  const onClickFricLoss = () => {
    if (ready) {
      const result = frictionLoss(
        +qDischargeRef.current.value,
        +plLengthRef.current.value,
        +plDiamRef.current.value,
        +cRef.current.value
      );
      calcScreenRef.current.classList.add("active");
      calcTextRef.current.innerText = `${result.toFixed(4)}`;
      saveButtonRef.current.classList.add("save-active");
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
      calcTextRef2.current.innerText = `${result.toFixed(3)}`;
      saveButton2Ref.current.classList.add("save-active");
    } else {
      return;
    }
  };

  // Click handlers for saving calculations
  const saveCalc = () => {
    const calcInfo = {
      calculation: "Pipe Volume",
      inputs: [
        `Q-discharge (gpm): ${qDischargeRef.current.value}`,
        `Length (ft): ${plLengthRef.current.value}`,
        `Diameter (in): ${plDiamRef.current.value}`,
        `C: ${cRef.current.value}`,
      ],

      output: `${calcTextRef.current.innerText} psi`,
      id: uuidv4(),
    };
    setSavedCalcs([...savedCalcs, calcInfo]);
  };

  const saveCalc2 = () => {
    const fricLoss = frictionLoss(
      +qDischargeRef.current.value,
      +plLengthRef.current.value,
      +plDiamRef.current.value,
      +cRef.current.value
    );
    const calcInfo = {
      calculation: "Pressure Loss",
      inputs: [
        `Friction Loss (psi): ${fricLoss.toFixed(4)}`,
        `P-discharge (psi): ${pDischargeRef.current.value}`,
        `Elevation add (ft): ${elevAddRef.current.value}`,
      ],

      output: `${calcScreen2Ref.current.innerText} psi`,
      id: uuidv4(),
    };
    setSavedCalcs([...savedCalcs, calcInfo]);
  };

  return (
    <section
      className={`calculator ${calcDisplay === "press-loss" ? "double" : ""}`}
    >
      <h2>Pressure Loss (psi)</h2>
      <hr></hr>
      <div id="double-calc-container">
        <div id="fric-loss-calc">
          <h2>Friction Loss</h2>
          <div className="calc-screen" ref={calcScreenRef}>
            <span ref={calcTextRef}></span>
            <button
              className="save-button"
              ref={saveButtonRef}
              onClick={saveCalc}
            >
              Save
            </button>
          </div>
          <div className="inputs-container">
            <div className="input-wrapper">
              <label htmlFor="q-discharge">Q-discharge (gpm):</label>

              <input
                type="number"
                ref={qDischargeRef}
                name="q-discharge"
                className="input"
                onChange={prepCalculator}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="PL-length">Length (ft):</label>

              <input
                type="number"
                ref={plLengthRef}
                name="PL-length"
                className="input"
                onChange={prepCalculator}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="PL-diam">Diameter (in):</label>

              <input
                type="number"
                ref={plDiamRef}
                name="PL-diam"
                className="input"
                onChange={prepCalculator}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="c">C:</label>

              <input
                type="number"
                ref={cRef}
                name="c"
                className="input"
                onChange={prepCalculator}
              />
            </div>
          </div>
          <div className="buttons-container">
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
          <h2>P-Supply (psi)</h2>
          <div className="calc-screen" ref={calcScreen2Ref}>
            <span ref={calcTextRef2}></span>
            <button
              className="save-button"
              ref={saveButton2Ref}
              onClick={saveCalc2}
            >
              Save
            </button>
          </div>
          <div className="inputs-container">
            <div className="input-wrapper">
              <label htmlFor="p-discharge">P-discharge (psi):</label>
              <input
                type="number"
                ref={pDischargeRef}
                name="p-discharge"
                className="input"
                onChange={prepCalculator}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="elev-add">Elevation add (ft):</label>
              <input
                type="number"
                ref={elevAddRef}
                name="elev-add"
                className="input"
                onChange={prepCalculator}
              />
            </div>
          </div>
          <div className="buttons-container">
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
