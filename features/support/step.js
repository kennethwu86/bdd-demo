const { Given, When, Then } = require('cucumber')
const expect = require('expect')

var targetVal = null

Given('Please print: {string}', function (printString) {
    //this.printString = printString
    //printString = printString

    this.targetVal = printString
})

When('Print string', function () {
    console.log(this.targetVal)
})

Then('Display string: {string}', function (expectedString) {
    //expect(this.printString).toHaveLength(1);
    expect(this.targetVal).toEqual(expectedString)
})

