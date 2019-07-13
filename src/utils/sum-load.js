module.exports.sumChequeValues = (value, chequeLoad) =>
  (value === 1000 && chequeLoad !== 0)
    ? chequeLoad * value
    : chequeLoad + value
