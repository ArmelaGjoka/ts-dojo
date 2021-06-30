import {Calculator} from '../src/calculator.class';

describe("Calculator", () => {

    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should return I to 1", () => {
        expect(calculator.convertToRomanNumber(1)).toBe('I')
    })


});