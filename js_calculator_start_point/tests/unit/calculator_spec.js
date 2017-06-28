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

  it("can add a number", function(){
    calculator.add(5)
    assert.equal(5, calculator.runningTotal)
  })

  it("can add 1 and 4", function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
  })

  it("can subtract 4 from 7", function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it("can multiply 3 and 5", function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it("can divide two numbers", function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it("can concatenate multiple button clicks", function(){
    calculator.numberClick(4)
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(51, calculator.runningTotal)
  })

  it("can chain multiple operations together", function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(18, calculator.runningTotal)
  })

  it("can clear the running total without affecting the calculation", function(){
    calculator.numberClick(8)
    calculator.operatorClick('+')
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(10, calculator.runningTotal)
  })

  

});
