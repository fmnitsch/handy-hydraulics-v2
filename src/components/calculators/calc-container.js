import { useState } from "react";
// Calculators
import ElevationPressure from "./elev-pressure";
import OrificeDischarge from "./orif-discharge";
import PipeVolume from "./pipe-volume";
import PressureLoss from "./press-loss";
import SprinklerDischarge from "./sprink-discharge";

function CalcContainer({
  calcDisplay,
  calcScreenRef,
  calcScreen2Ref,
  selector,
  setSelector,
}) {
  // State
  const [ready, setReady] = useState(false);

  // Clear button function
  const clear = (inputs) => {
    inputs.forEach((field) => (field.current.value = ""));
    calcScreenRef.current.classList.remove("active");
    calcScreenRef.current.innerHTML = "<span></span>";
  };

  // Click handler for calculator selector
  const selectorToggle = () => {
    setSelector(!selector);
  };

  return (
    <div className={`calc-container ${selector ? "selector-active" : ""}`}>
      <button className="toggle-calcs" onClick={selectorToggle}>
        See all calculators
      </button>
      {calcDisplay === "elev-press" && (
        <ElevationPressure
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
        />
      )}
      {calcDisplay === "orif-dis" && (
        <OrificeDischarge
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
        />
      )}

      {calcDisplay === "pipe-vol" && (
        <PipeVolume
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
        />
      )}

      {calcDisplay === "sprink-dis" && (
        <SprinklerDischarge
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
        />
      )}

      {calcDisplay === "press-loss" && (
        <PressureLoss
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
          calcScreen2Ref={calcScreen2Ref}
        />
      )}

      {calcDisplay === null && (
        <ElevationPressure
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
        />
      )}
    </div>
  );
}

export default CalcContainer;
