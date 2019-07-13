module.exports.formatReturn = (chequeLoad, chequeCents) =>
  chequeCents
    ? { status: true, conversion: `${chequeLoad - chequeCents},${chequeCents}` }
    : { status: true, conversion: `${chequeLoad},00` }
