module.exports.generateChequeCents = array => {
  const getRealIndex = array.indexOf('reais') + 2
  const getCentsIndex = array.indexOf('centavos') - 1

  return (getRealIndex !== getCentsIndex)
    ? array[getRealIndex] + array[getCentsIndex]
    : array[getRealIndex]
}
