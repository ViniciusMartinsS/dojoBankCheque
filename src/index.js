'use strict'

const {
  formatReturn,
  generateChequeCents,
  stringValueToNumericValue,
  sumChequeValues
} = require('./utils')
let chequeLoad = 0

module.exports.convertBankCheque = params => {
  const chequeValues = stringValueToNumericValue(params)
  const chequeCents = generateChequeCents(chequeValues)

  chequeValues.forEach(value => {
    if (typeof value === 'number') {
      chequeLoad = sumChequeValues(value, chequeLoad)
    }
  })
  const formatChequeLoad = formatReturn(chequeLoad, chequeCents)

  chequeLoad = 0
  return formatChequeLoad
}
