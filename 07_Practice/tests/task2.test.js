const {Validator} = require('../src/task2');

describe('Validator', () => {
    const validator = new Validator();

    test('testing method Validator isEmail() check str is email', () => {
        expect(validator.isEmail('phphtml@mail.ru')).toBe(true);
    });
    test('testing method Validator isEmail() check str is email', () => {
        expect(validator.isEmail('phphtmlmailru')).toBe(false);
    });

    test('testing method Validator isDomain() check str is domain', () => {
        expect(validator.isDomain('phphtml.net')).toBe(true);
    });
    test('testing method Validator isDomain() check str is domain', () => {
        expect(validator.isDomain('phphtmlnet')).toBe(false);
    });

    test('testing method Validator isDate() check str is date', () => {
        expect(validator.isDate('12.10.2022')).toBe(true);
    });
    test('testing method Validator isDate() check str is date', () => {
        expect(validator.isDate('12.102022')).toBe(false);
    });

    test('testing method Validator isPhone() check str is phone', () => {
        expect(validator.isPhone('+38(098)817-68-92')).toBe(true);
    });
    test('testing method Validator isPhone() check str is phone', () => {
        expect(validator.isPhone('817-68-92')).toBe(false);
    });
});