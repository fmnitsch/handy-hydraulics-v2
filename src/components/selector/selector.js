import xSymbol from "../../img/x-symbol.svg";

function Selector({ selector, calcDisplay, setCalcDisplay, setSelector }) {
  // Calculator display logic
  const select = (e) => {
    setCalcDisplay(`${e.target.id}`);
  };

  // Toggle selector
  const toggleSelector = () => {
    setSelector(!selector);
  };

  return (
    <section className={`calc-selector ${selector ? "show" : "hide"}`}>
      <div className="close-wrapper">
        <img src={xSymbol} alt="" onClick={toggleSelector} />
      </div>
      <ul className="calc-list">
        <li
          className={`selector ${
            calcDisplay === "elev-press" || calcDisplay === null ? "active" : ""
          }`}
          onClick={select}
          id="elev-press"
        >
          Elevation Pressure
        </li>
        <li
          className={`selector ${calcDisplay === "orif-dis" ? "active" : ""}`}
          onClick={select}
          id="orif-dis"
        >
          Orifice Discharge
        </li>
        <li
          className={`selector ${calcDisplay === "pipe-vol" ? "active" : ""}`}
          onClick={select}
          id="pipe-vol"
        >
          Pipe Volume
        </li>
        <li
          className={`selector ${calcDisplay === "sprink-dis" ? "active" : ""}`}
          onClick={select}
          id="sprink-dis"
        >
          Sprinkler Discharge
        </li>
        <li
          className={`selector ${calcDisplay === "press-loss" ? "active" : ""}`}
          onClick={select}
          id="press-loss"
        >
          Pressure Loss
        </li>
      </ul>
    </section>
  );
}

export default Selector;
