class Microwave {
  constructor(hasOven, region) {
    this.hasOven = hasOven
    this.region = region
    this.buffer = this.hasOven ? 'COOK\nDEFROST\nOVEN' : 'COOK\nDEFROST'
  }
  isRunning = false
  click(btn) {
    if (btn === 'DOWN') {
      if (this.region === 'USA') {
        this.buffer = 'Temp °F?'
      } else {
        this.buffer = 'DEFROST, How long?'
      }
    } else if (btn === '3') {
      this.buffer = '3 sec.'
    } else if (btn === '0') {
      this.buffer = '30 sec.'
    } else if (btn === 'ENTER' && this.display() === '30 sec.') {
      this.isRunning = true
    }
  }

  display() {
    return this.buffer
  }
}

const buildMicrowave = () => new Microwave(true, true)

module.exports = {
  Microwave,
  buildMicrowave
}
