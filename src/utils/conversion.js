'use strict'

const { values } = require('./fields')

module.exports.stringValueToNumericValue = params => {
  const chequeLoadStringArray = params.toLowerCase().split(' ')
  return chequeLoadStringArray.map(chequeLoadString => {
    if (values[chequeLoadString] !== undefined) {
      return values[chequeLoadString]
    }
    const error = {
      status: false,
      message: `String: "${chequeLoadString}" not known or not handled by transform`
    }
    throw error
  })
}
