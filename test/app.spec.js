//Mukuye Mark and Timothy Tugume worked on this work

// const assert = require("chai").assert;

const MathsService = require('../app');
const chai = require('chai');
const { assert } = require('chai');
const expect = chai.expect; 

describe('Factorial', function() {

    it('factorial should return correct value', function() {
        const mathsService = new MathsService();
       assert.equal(mathsService.factorial(-99), -1);
       
    });

    it('factorial should return correct value', function() {
        const mathsService = new MathsService();
        assert.equal(mathsService.factorial(0), 1);
        assert.equal(mathsService.factorial(1), 1);
        
    });

    it('factorial should return correct value', function() {
        const mathsService = new MathsService();
        assert.equal(mathsService.factorial(3), 6);
        assert.equal(mathsService.factorial(5), 120);
    });

    it('factorial should return correct value', function() {
        const mathsService = new MathsService();
       assert.equal(mathsService.factorial(7), 5040);
        assert.equal(mathsService.factorial(8), 40320);
    });
});




// const assert = require("chai").assert;

// describe("Testing Field", ()=>{
//     let num =6
//     let str="fdgsugduj"
//     it('Prove that num is a numeric', ()=>{
//         assert.isBoolean(num)
//     })
//     it('Prove that str is a string', ()=>{
//         assert.isString(str)
//     })
// })
