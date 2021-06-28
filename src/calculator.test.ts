import {Calculator} from '../src/calculator.class';

describe("Calculator", () => {

    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should return a string", () => {
        expect(calculator.convertToRomanNumber(3)).toBe('');
    });

    it("should convert 1 to I", () => {
        expect(calculator.convertToRomanNumber(1)).toBe('I');
    });

    it("should convert 2 to II", () => {
        expect(calculator.convertToRomanNumber(2)).toBe('II');
    });

    it("should throw an error for numbers less than 0", () => {
        try {
            calculator.convertToRomanNumber(0);
        } catch (error) {
            expect(error).toBeInstanceOf(RangeError);
            expect(error).toHaveProperty('message', 'Values less than 1 can not be converted to Roman numbers');
        }
    });


});