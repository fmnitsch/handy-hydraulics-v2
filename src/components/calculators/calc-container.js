import { useEffect, useState } from "react";
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
  calcButtonRef,
  calcButton2Ref,
}) {
  // State
  const [ready, setReady] = useState(false);

  // Clear button function
  const clear = (inputs) => {
    inputs.forEach((field) => (field.current.value = ""));
    calcScreenRef.current.classList.remove("active");
    calcScreenRef.current.innerHTML = "<span></span>";
    setReady(false);
  };

  // Click handler for calculator selector
  const selectorToggle = () => {
    setSelector(!selector);
  };

  // Make sure calculate button is inactive on re-renders
  useEffect(() => {
    setReady(false);
  }, [calcDisplay]);

  return (
    <div className={`calc-container ${selector ? "selector-active" : ""}`}>
      <button className="toggle-calcs" onClick={selectorToggle}>
        All calculators
      </button>
      {calcDisplay === "elev-press" && (
        <ElevationPressure
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
          calcButtonRef={calcButtonRef}
        />
      )}
      {calcDisplay === "orif-dis" && (
        <OrificeDischarge
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
          calcButtonRef={calcButtonRef}
        />
      )}

      {calcDisplay === "pipe-vol" && (
        <PipeVolume
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
          calcButtonRef={calcButtonRef}
        />
      )}

      {calcDisplay === "sprink-dis" && (
        <SprinklerDischarge
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
          calcButtonRef={calcButtonRef}
        />
      )}

      {calcDisplay === "press-loss" && (
        <PressureLoss
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
          calcScreen2Ref={calcScreen2Ref}
          calcButtonRef={calcButtonRef}
          calcButton2Ref={calcButton2Ref}
        />
      )}

      {calcDisplay === null && (
        <ElevationPressure
          clear={clear}
          calcScreenRef={calcScreenRef}
          ready={ready}
          setReady={setReady}
          calcButtonRef={calcButtonRef}
        />
      )}
    </div>
  );
}

export default CalcContainer;
