import xSymbol from "../../img/x-symbol.svg";

function SavedCalcs({ savedCalcs, setSavedCalcs }) {
  const removeCard = (e) => {
    setSavedCalcs(savedCalcs.filter((calc) => calc.id !== e.target.id));
  };
  return (
    <div className="saved-calcs-container">
      <p>Saved Calculations</p>
      {savedCalcs.map((calc) => {
        return (
          <div className="calc-card" key={calc.id}>
            <div className="title-wrapper">
              <p>
                <strong>{calc.calculation}</strong>
              </p>
            </div>
            <div className="input-display-wrapper">
              <p>
                <strong>Inputs</strong>
              </p>
              {calc.inputs.map((input) => (
                <p key={input.toString()}>{input}</p>
              ))}
            </div>
            <div className="output-display-wrapper">
              <p>
                <strong>Calculation</strong>
              </p>
              <p>{calc.output}</p>
            </div>
            <div className="close">
              <img src={xSymbol} alt="" id={calc.id} onClick={removeCard} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SavedCalcs;
