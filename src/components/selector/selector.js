import { useRef } from "react";

function Selector({ select }) {
  const calcSelectRef = useRef(null);
  const handleSeeCalcsClick = () => {
    calcSelectRef.current.classList.add("visible");
    console.log(calcSelectRef.current.classList);
  };
  return (
    <div className="calc-selector-container">
      <p onClick={handleSeeCalcsClick}>See calculators</p>
      <section className="calc-selector" ref={calcSelectRef}>
        <h3 className="calc-header">Calculators:</h3>
        <ul className="calc-list">
          <li className="selector" id="elev-press" onClick={select}>
            Elevation pressure
          </li>
          <li className="selector" id="orif-dis" onClick={select}>
            Orifice discharge
          </li>
          <li className="selector" id="pipe-vol" onClick={select}>
            Pipe volume
          </li>
          <li className="selector" id="sprink-dis" onClick={select}>
            Sprinkler discharge
          </li>
          <li className="selector" id="press-loss" onClick={select}>
            Pressure loss
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Selector;
