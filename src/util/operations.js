const Calculators = {
  elevationPressure: function (height) {
    return height * 0.433;
  },

  orificeDischarge: function (orifice, cFact, psi) {
    return 29.83 * cFact * (orifice * orifice) * Math.sqrt(psi);
  },

  pipeVolume: function (pvDiam, pvLength) {
    return 0.040799 * Math.pow(pvDiam, 2) * pvLength;
  },

  sprinklerDischarge: function (k, pressPSI) {
    return Math.sqrt(pressPSI) * k;
  },

  frictionLoss: function (qDischarge, plLength, plDiam, c) {
    return (
      ((4.52 * Math.pow(qDischarge, 1.85)) /
        (Math.pow(c, 1.85) * Math.pow(plDiam, 4.87))) *
      plLength
    );
  },

  pSuppPsi: function (fricLoss, pDischarge, elevAdd) {
    return pDischarge + fricLoss + elevAdd * 0.433;
  },
};

export default Calculators;
