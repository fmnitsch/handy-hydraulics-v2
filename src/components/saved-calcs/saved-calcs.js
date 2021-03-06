import { useRef } from "react";
import xSymbol from "../../img/x-symbol.svg";
import { saveAs } from "file-saver";
// Image
import Edit from "../../img/Edit.svg";

function SavedCalcs({ savedCalcs, setSavedCalcs }) {
  // Refs
  const savedCalcsRef = useRef(null);

  // Click handler for card removal
  const removeCard = (e) => {
    setSavedCalcs(savedCalcs.filter((calc) => calc.id !== e.target.id));
  };

  // Click handler for print-out
  const downloadCalcs = () => {
    let calculations = savedCalcsRef.current.innerText;

    let blob = new Blob([calculations], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "hh-calcs.txt");
  };

  return (
    <div className="saved-calcs-container">
      <div className="saved-options-wrapper">
        <p>My saved calculations</p>
        <button
          className={`saved-calcs-button ${savedCalcs[0] ? "visible" : ""}`}
          onClick={downloadCalcs}
        >
          <img className="print" src={Edit} alt="" />
        </button>
      </div>
      <div className="current-saved-calcs" ref={savedCalcsRef}>
        {savedCalcs.map((calc) => {
          return (
            <div className="calc-card" key={calc.id}>
              <div className="title-wrapper">
                <p>
                  <strong>{calc.calculation}</strong>
                </p>
                <div className="close">
                  <img src={xSymbol} alt="" id={calc.id} onClick={removeCard} />
                </div>
              </div>
              <div className="calculation-wrapper">
                <div className="input-display-wrapper">
                  <p></p>
                  {calc.inputs.map((input) => (
                    <p key={input.toString()}>{input}</p>
                  ))}
                </div>
                <div className="output-display-wrapper">
                  <p></p>
                  <p className="answer">= {calc.output}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SavedCalcs;
