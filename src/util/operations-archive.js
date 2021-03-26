const Calculators = {
  elevationPressure: function () {
    let height = document.getElementById("height").value;
    let pressure = height * 0.433;
    return !pressure
      ? alert("Invalid input. Please fill all fields and enter only numbers")
      : (document.getElementById(
          "calc-screen"
        ).innerHTML = `<span>${pressure.toFixed(3)} psi</span>`);
  },

  orificeDischarge: function () {
    let orifice = document.getElementById("orifice").value;
    let c = document.getElementById("cfact").value;
    let psi = document.getElementById("psi").value;
    let calcDischarge = Math.round(
      29.83 * c * (orifice * orifice) * Math.sqrt(psi)
    );
    return !calcDischarge
      ? alert("Invalid input. Please fill all fields and enter only numbers")
      : (document.getElementById(
          "calc-screen"
        ).innerHTML = `<span>${calcDischarge} gpm</span>`);
  },

  pipeVolume: function () {
    let pvDiam = document.getElementById("PV-diam").value;
    let pvLength = document.getElementById("PV-length").value;
    let calcPipeVol = 0.040799 * Math.pow(pvDiam, 2) * pvLength;
    return !calcPipeVol
      ? alert("Invalid input. Please fill all fields and enter only numbers")
      : (document.getElementById(
          "calc-screen"
        ).innerHTML = `<span>${calcPipeVol.toFixed(3)} U.S. Gal</span>`);
  },

  sprinklerDischarge: function () {
    let k = document.getElementById("k").value;
    let pressPSI = document.getElementById("pressure-psi").value;
    let calcSprinkDischarge = Math.sqrt(pressPSI) * k;
    return !calcSprinkDischarge
      ? alert("Invalid input. Please fill all fields and enter only numbers")
      : (document.getElementById(
          "calc-screen"
        ).innerHTML = `<span>${calcSprinkDischarge.toFixed(1)} gpm</span>`);
  },

  frictionLoss: function () {
    let qDischarge = document.getElementById("q-discharge").value;
    let plLength = document.getElementById("PL-length").value;
    let plDiam = document.getElementById("PL-diam").value;
    let c = document.getElementById("c").value;
    let calcFrictionLoss =
      ((4.52 * Math.pow(qDischarge, 1.85)) /
        (Math.pow(c, 1.85) * Math.pow(plDiam, 4.87))) *
      plLength;
    return !calcFrictionLoss
      ? alert("Invalid input. Please fill all fields and enter only numbers")
      : (document.getElementById(
          "calc-screen"
        ).innerHTML = `<span>${calcFrictionLoss.toFixed(4)} psi</span>`);
  },

  pSuppPsi: function () {
    let pDischarge = document.getElementById("p-discharge").value;
    let qDischarge = document.getElementById("q-discharge").value;
    let plLength = document.getElementById("PL-length").value;
    let plDiam = document.getElementById("PL-diam").value;
    let c = document.getElementById("c").value;
    let calcFrictionLoss =
      ((4.52 * Math.pow(qDischarge, 1.85)) /
        (Math.pow(c, 1.85) * Math.pow(plDiam, 4.87))) *
      plLength;
    let elevAdd = document.getElementById("elev-add").value;
    let calcPSuppPsi =
      Number(pDischarge) + Number(calcFrictionLoss) + Number(elevAdd) * 0.433;
    return !calcPSuppPsi
      ? alert("Invalid input. Please fill all fields and enter only numbers")
      : (document.getElementById(
          "calc-screen2"
        ).innerHTML = `<span>${calcPSuppPsi.toFixed(3)} psi</span>`);
  },
};

export default Calculators;
