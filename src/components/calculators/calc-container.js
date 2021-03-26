import { useState } from "react";
// Calculators
import ElevationPressure from "./elev-pressure";
import OrificeDischarge from "./orif-discharge";
import PipeVolume from "./pipe-volume";
import PressureLoss from "./press-loss";
import SprinklerDischarge from "./sprink-discharge";

function CalcContainer({ calcDisplay, calcScreenRef }) {
  // State
  const [ready, setReady] = useState(false);

  const clear = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((field) => (field.value = ""));
    calcScreenRef.current.innerHTML = "<span>0</span>";
  };

  if (calcDisplay === "elev-press") {
    return (
      <ElevationPressure
        clear={clear}
        calcScreenRef={calcScreenRef}
        ready={ready}
        setReady={setReady}
      />
    );
  } else if (calcDisplay === "orif-dis") {
    return (
      <OrificeDischarge
        clear={clear}
        calcScreenRef={calcScreenRef}
        ready={ready}
        setReady={setReady}
      />
    );
  } else if (calcDisplay === "pipe-vol") {
    return (
      <PipeVolume
        clear={clear}
        calcScreenRef={calcScreenRef}
        ready={ready}
        setReady={setReady}
      />
    );
  } else if (calcDisplay === "sprink-dis") {
    return (
      <SprinklerDischarge
        clear={clear}
        calcScreenRef={calcScreenRef}
        ready={ready}
        setReady={setReady}
      />
    );
  } else if (calcDisplay === "press-loss") {
    return (
      <PressureLoss
        clear={clear}
        calcScreenRef={calcScreenRef}
        ready={ready}
        setReady={setReady}
      />
    );
  } else {
    return (
      <ElevationPressure
        clear={clear}
        calcScreenRef={calcScreenRef}
        ready={ready}
        setReady={setReady}
      />
    );
  }
}

export default CalcContainer;
