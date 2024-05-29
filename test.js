class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3));   // Outputs: 2

const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../Calculator');

describe('Calculator', function () {
    let calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    describe('add', function () {
        it('adds two positive numbers', function () {
            const result = calculator.add(5, 3);
            expect(result).to.equal(8);
        });

        it('adds two negative numbers', function () {
            const result = calculator.add(-5, -3);
            expect(result).to.equal(-8);
        });

        it('adds a positive number and a negative number', function () {
            const result = calculator.add(5, -3);
            expect(result).to.equal(2);
        });
    });

    describe('subtract', function () {
        it('subtracts two positive numbers', function () {
            const result = calculator.subtract(5, 3);
            expect(result).to.equal(2);
        });

        it('subtracts two negative numbers', function () {
            const result = calculator.subtract(-5, -3);
            expect(result).to.equal(-2);
        });

        it('subtracts a positive number and a negative number', function () {
            const result = calculator.subtract(5, -3);
            expect(result).to.equal(8);
        });
    });

    describe('multiply', function () {
        it('multiplies two positive numbers', function () {
            const result = calculator.multiply(5, 3);
            expect(result).to.equal(15);
        });

        it('multiplies two negative numbers', function () {
            const result = calculator.multiply(-5, -3);
            expect(result).to.equal(15);
        });

        it('multiplies a positive number and a negative number', function () {
            const result = calculator.multiply(5, -3);
            expect(result).to.equal(-15);
        });
    });

    describe('divide', function () {
        it('divides two positive numbers', function () {
            const result = calculator.divide(6, 3);
            expect(result).to.equal(2);
        });

        it('divides two negative numbers', function () {
            const result = calculator.divide(-6, -3);
            expect(result).to.equal(2);
        });

        it('divides a positive number and a negative number', function () {
            const result = calculator.divide(6, -3);
            expect(result).to.equal(-2);
        });

        it('throws an error when dividing by zero', function () {
            expect(() => calculator.divide(6, 0)).to.throw("Cannot divide by zero");
        });
    });
});