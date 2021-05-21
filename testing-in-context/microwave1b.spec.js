const { expect } = require('@jest/globals')
const { Microwave } = require('./microwave')

describe('Microwave.js', () => {
  let microwave, params

  describe('Given a microwave', () => {
    beforeEach(() => {
      microwave = new Microwave()
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

      describe('and "3" is pushed', () => {
        beforeEach(() => {
          microwave.click('3')
        })

        it('should display "3 sec."', () =>
          expect(microwave.display()).toEqual('3 sec.'))

        describe('and "0" is pushed', () => {
          beforeEach(() => {
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
    })
  })
})
