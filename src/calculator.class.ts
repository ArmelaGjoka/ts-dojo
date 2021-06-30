export class Calculator {

    constructor() {
        console.log('Constructor');
        this.convertToRomanNumber(5);
    }

    arabicNumbers = [1, 5, 10, 50, 100, 500, 1000];
    romanNumbers = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

    convertToRomanNumber(value : number) : string {
        if (value < 1) {
            throw new RangeError
            ('Values less than 1 can not be converted to Roman numbers');
        }

        let roman = '';

        for (let i = 6; i >= 0; i--) {
            const arabicValue = this.arabicNumbers[i];
            while (value >= arabicValue) {
                roman += this.romanNumbers[i];
                value -= arabicValue;
            }
        }

        return roman;
    }
}