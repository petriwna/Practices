const {bind} = require('../src/task5');

describe('bind', () => {
    test('create bind method', () => {
        let obj = {
            a: 100,
            b: 200
        };
        let func = function( c ) { return this.a + this.b + c };
        let newObject = func.bind(obj, 300)
        expect(newObject()).toEqual(600)
    });
})