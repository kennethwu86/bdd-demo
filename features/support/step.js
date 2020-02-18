const { Given, When, Then } = require('cucumber')
const expect = require('expect')

Given('Please print: {string}', function (printString) {
    this.targetVal = printString
})

When('Print string', function () {
    console.log(this.targetVal)
})

Then('Display string: {string}', function (expectedString) {
    expect(this.targetVal).toEqual(expectedString)
})

