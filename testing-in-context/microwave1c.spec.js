const { expect, describe } = require('@jest/globals')
const { Microwave } = require('./microwave')

describe('Microwave.js', () => {
  let microwave, params

  describe('Given a microwave', () => {
    beforeEach(() => {
      const region = undefined
      const hasOven = undefined
      microwave = new Microwave(hasOven, region)
    })

    it('should show the COOK and DEFROST menu items', () =>
      expect(microwave.display()).toEqual('COOK\nDEFROST'))

    describe('and DEFROST is selected', () => {
      beforeEach(() => {
        microwave.click('DOWN')
        microwave.click('ENTER')
      })

      it('should display "DEFROST, How long?" in the display', () =>
        expect(microwave.display()).toEqual('DEFROST, How long?'))

      describe('and "30" is selected', () => {
        beforeEach(() => {
          microwave.click('3')
          microwave.click('0')
        })

        it('should display "30 sec."', () =>
          expect(microwave.display()).toEqual('30 sec.'))

        it('should not be running', () =>
          expect(microwave.isRunning).toBe(false))

        describe('and "ENTER" is pushed', () => {
          beforeEach(() => {
            microwave.click('ENTER')
          })

          it('should start running', () =>
            expect(microwave.isRunning).toBe(true))
        })
      })
    })

    describe('and it has an oven feature', () => {
      beforeEach(() => {
        const region = undefined
        const hasOven = true
        microwave = new Microwave(hasOven, region)
      })

      it('should show the COOK, DEFROST and OVEN menu items', () =>
        expect(microwave.display()).toEqual('COOK\nDEFROST\nOVEN'))
    })
  })
})
