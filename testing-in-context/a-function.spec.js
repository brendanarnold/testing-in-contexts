const { expect } = require('@jest/globals')
const { aFunction } = require('./a-function')

describe('a-function.js', () => {
  let params

  describe('Given a microwave', () => {
    beforeEach(() => {
      params = {
        first: undefined,
        second: undefined
      }
    })

    it('should show the COOK and DEFROST menu items', () =>
      expect(aFunction(params.first, params.second)).toEqual(undefined))

    describe('and it has an oven feature', () => {
      beforeEach(() => {
        params.first = 'foo'
      })

      it('should show the COOK, DEFROST and OVEN menu items', () =>
        expect(aFunction(params.first, params.second)).toEqual(undefined))
    })
  })
})
