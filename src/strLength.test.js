const strLength = require('./strlength');

test('properly returns string length', () => {
    expect(strLength('fickle')).toBe(6)
})