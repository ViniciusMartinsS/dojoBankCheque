/* eslint-env mocha */
/* eslint no-debugger: off */
/* eslint-disable node/no-unpublished-require */

const { expect } = require('chai')
const { convertBankCheque } = require('../src')
const { invalid, valid } = require('./mocks')

describe('Convert bank cheque tests', () => {
  it(`Expect invalid message when trying to 
      format cheque load with invalid payload`, () => {
    try {
      const response = convertBankCheque(invalid.payload)
      expect(response).to.be.equal(undefined)
    } catch (err) {
      expect(typeof err).to.be.equal('object')
      expect(err.status).to.be.equal(false)
      expect(typeof err.message).to.be.equal('string')
    }
  })

  it(`Expect to format bank cheque load with complete payload: 
      thousand, reais & double cents`, () => {
    const response = convertBankCheque(valid.complete)

    expect(typeof response).to.be.equal('object')
    expect(response.status).to.be.equal(true)
    expect(typeof response.conversion).to.be.equal('string')
    expect(response.conversion).to.be.equal('3500,99')
  })

  it(`Expect to format bank cheque load with complete payload: 
      thousand, reais & single cent`, () => {
    const response = convertBankCheque(valid.completeSingleCent)

    expect(typeof response).to.be.equal('object')
    expect(response.status).to.be.equal(true)
    expect(typeof response.conversion).to.be.equal('string')
    expect(response.conversion).to.be.equal('2523,18')
  })

  it(`Expect to format bank cheque load with 
      payload missing cents & thousand`, () => {
    const response = convertBankCheque(valid.missCents)

    expect(typeof response).to.be.equal('object')
    expect(response.status).to.be.equal(true)
    expect(typeof response.conversion).to.be.equal('string')
    expect(response.conversion).to.be.equal('22,00')
  })
})
