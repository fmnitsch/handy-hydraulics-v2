import { useState, useEffect } from "react";

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
  calcTextRef,
  calcTextRef2,
  selector,
  setSelector,
  calcButtonRef,
  calcButton2Ref,
  saveButtonRef,
  saveButton2Ref,
  savedCalcs,
  setSavedCalcs,
}) {
  // State
  const [ready, setReady] = useState(false);

  // Clear button function
  const clear = (inputs) => {
    inputs.forEach((field) => (field.current.value = ""));
    calcScreenRef.current.classList.remove("active");
    calcTextRef.current.innerText = "";
    saveButtonRef.current.classList.remove("save-active");
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
    <div className={`calc-container`}>
      <button className="toggle-calcs" onClick={selectorToggle}>
        See all calculators
      </button>
      {calcDisplay === "elev-press" && (
        <ElevationPressure
          clear={clear}
          calcScreenRef={calcScreenRef}
          calcTextRef={calcTextRef}
          ready={ready}
          setReady={setReady}
          calcButtonRef={calcButtonRef}
          saveButtonRef={saveButtonRef}
          savedCalcs={savedCalcs}
          setSavedCalcs={setSavedCalcs}
        />
      )}
      {calcDisplay === "orif-dis" && (
        <OrificeDischarge
          clear={clear}
          calcScreenRef={calcScreenRef}
          calcTextRef={calcTextRef}
          ready={ready}
          setReady={setReady}
          calcButtonRef={calcButtonRef}
          saveButtonRef={saveButtonRef}
          savedCalcs={savedCalcs}
          setSavedCalcs={setSavedCalcs}
        />
      )}

      {calcDisplay === "pipe-vol" && (
        <PipeVolume
          clear={clear}
          calcScreenRef={calcScreenRef}
          calcTextRef={calcTextRef}
          ready={ready}
          setReady={setReady}
          calcButtonRef={calcButtonRef}
          saveButtonRef={saveButtonRef}
          savedCalcs={savedCalcs}
          setSavedCalcs={setSavedCalcs}
        />
      )}

      {calcDisplay === "sprink-dis" && (
        <SprinklerDischarge
          clear={clear}
          calcScreenRef={calcScreenRef}
          calcTextRef={calcTextRef}
          ready={ready}
          setReady={setReady}
          calcButtonRef={calcButtonRef}
          saveButtonRef={saveButtonRef}
          savedCalcs={savedCalcs}
          setSavedCalcs={setSavedCalcs}
        />
      )}

      {calcDisplay === "press-loss" && (
        <PressureLoss
          calcDisplay={calcDisplay}
          clear={clear}
          calcScreenRef={calcScreenRef}
          calcTextRef={calcTextRef}
          ready={ready}
          setReady={setReady}
          calcScreen2Ref={calcScreen2Ref}
          calcTextRef2={calcTextRef2}
          calcButtonRef={calcButtonRef}
          calcButton2Ref={calcButton2Ref}
          saveButtonRef={saveButtonRef}
          saveButton2Ref={saveButton2Ref}
          savedCalcs={savedCalcs}
          setSavedCalcs={setSavedCalcs}
        />
      )}

      {calcDisplay === null && (
        <ElevationPressure
          clear={clear}
          calcScreenRef={calcScreenRef}
          calcTextRef={calcTextRef}
          ready={ready}
          setReady={setReady}
          calcButtonRef={calcButtonRef}
          saveButtonRef={saveButtonRef}
          savedCalcs={savedCalcs}
          setSavedCalcs={setSavedCalcs}
        />
      )}
    </div>
  );
}

export default CalcContainer;
