var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // calculator.add() - add 1 to 4 and get 5
  it('add 1 to 4 and get 5', function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("=")
    assert.equal(5,calculator.runningTotal )
  })

  // calculator.subtract() subtract 4 from 7 and get 3
  it('subtract 4 from 7 and get 3', function(){
    calculator.numberClick(7)
    calculator.operatorClick("-")
    calculator.numberClick(4)
    calculator.operatorClick("=")
    assert.equal(3,calculator.runningTotal )
  })

  //   calculator.multiply() - multiply 3 by 5 and get 15
  it('multiply 3 by 5 and get 15', function(){
    calculator.numberClick(3)
    calculator.operatorClick("*")
    calculator.numberClick(5)
    calculator.operatorClick("=")
    assert.equal(15,calculator.runningTotal )
  })

  // calculator.divide() - divide 21 by 7 and get 3
  it('divide 21 by 7 and get 3', function(){
    calculator.numberClick(21)
    calculator.operatorClick("/")
    calculator.numberClick(7)
    calculator.operatorClick("=")
    assert.equal(3,calculator.runningTotal )
  })

  // calculator.numberClick() - concatenate multiple number button clicks
  it('concatenate multiple number button clicks', function(){
    calculator.numberClick(2)
    calculator.numberClick(7)
    assert.equal(27,calculator.runningTotal )
  })

  // calculator.operatorClick() - chain multiple operations together
  it('chain multiple operations together', function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("=")
    assert.equal(9,calculator.runningTotal )
  })

  // calculator.clearClick() - clear the running total without affecting the calculation
  it('clear the running total without affecting the calculation', function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick("=")
    assert.equal(3,calculator.runningTotal )
  })

});
