const bind = require('../src/task5');

const alex = { userName: "Alex" };

function greeting(greeting, punctuation) {
    return `${greeting} ${this.userName}${punctuation}`;
}
describe('bind', () => {
    test('create bind method', () => {
        expect(bind(greeting, alex)).toBe()
    })
})