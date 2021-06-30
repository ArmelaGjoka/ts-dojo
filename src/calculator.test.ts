import {Calculator} from '../src/calculator.class';

describe("Calculator", () => {

    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should convert number to empty string", () => {
        expect(calculator.convertToRomanNumber(1)).toBe('');
    });
});