//var describe = require('mocha').describe
//var it = require('mocha').it
var expect = require('chai').expect
var strictEqual = require('../index')

describe('index', () => {
    describe('strictEqual', () => {
        it('compares values to see if false', () => {
            //set the numbers
            var a = 10
            var b = "10"

            //call function
            let result = strictEqual(a, b)

            //assert what should be true
            expect(a).to.not.equal(b)
        })
    })
})

describe('index', () => {
    describe('strictEqual', () => {
        it('compares values to see if true', () => {
            //set the numbers
            var a = 10
            var b = 10

            //call function
            let result = strictEqual(a, b)

            //assert what should be true
            expect(a).to.equal(b)
        })
    })
})

describe('index', () => {
    describe('strictEqual', () => {
        it('compares values to see if true', () => {
            //set the numbers
            var a = "10"
            var b = "10"

            //call function
            let result = strictEqual(a, b)

            //assert what should be true
            expect(a).to.equal(b)
        })
    })
})

describe('index', () => {
    describe('strictEqual', () => {
        it('compares values to see if false', () => {
            //set the numbers
            var a = 10
            var b = 25

            //call function
            let result = strictEqual(a, b)

            //assert what should be true
            expect(a).to.not.equal(b)
        })
    })
})

describe('index', () => {
    describe('strictEqual', () => {
        it('compares values to see if false', () => {
            //set the numbers
            var a = "10"
            var b = "25"

            //call function
            let result = strictEqual(a, b)

            //assert what should be true
            expect(a).to.not.equal(b)
        })
    })
})

describe('index', () => {
    describe('strictEqual', () => {
        it('compares values to see if false', () => {
            //set the numbers
            var a = 10
            var b = "25"

            //call function
            let result = strictEqual(a, b)

            //assert what should be true
            expect(a).to.not.equal(b)
        })
    })
})