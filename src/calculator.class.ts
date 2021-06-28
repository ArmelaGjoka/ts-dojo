export class Calculator {

    convertToRomanNumber(value : number) : string {
        if (value == 0) {
            throw new RangeError
                    ('Values less than 1 can not be converted to Roman numbers');
        }

        if (value == 1) {
            return 'I';
        }

        if (value == 2) {
            return  'II';
        }

        return '';
    }
}