const { expect } = require('@jest/globals')
const { Microwave } = require('./microwave')

const _buildMicrowave = (params) => new Microwave(params.hasOven)

describe('Microwave.js', () => {
  let microwave, params

  describe('Given a microwave', () => {
    beforeEach(() => {
      params = {
        hasOven: undefined
      }
    })

    it('should show the COOK and DEFROST menu items', () =>
      expect(_buildMicrowave(params).display()).toEqual('COOK\nDEFROST'))

    describe('and DEFROST is selected', () => {
      beforeEach(() => {
        microwave = _buildMicrowave(params)
        microwave.click('DOWN')
        microwave.click('ENTER')
      })

      it('should display "DEFROST, How long?" in the display', () =>
        expect(microwave.display()).toEqual('DEFROST, How long?'))

      describe('and "30" is selected', () => {
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

    describe('and it has an oven feature', () => {
      beforeEach(() => {
        params.hasOven = true
      })

      it('should show the COOK, DEFROST and OVEN menu items', () =>
        expect(_buildMicrowave(params).display()).toEqual(
          'COOK\nDEFROST\nOVEN'
        ))
    })
  })
})
