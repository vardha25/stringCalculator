const { add } = require('../stringCalculator');
describe('String Calculator', () => {
    test('return 0 for an empty string', () => {
      expect(add('')).toBe(0);
    });

    test('returns the number for a single number string', () => {
        expect(add('5')).toBe(5);
      });
    
    test('returns the sum of two numbers separated by a comma', () => {
        expect(add('1,5')).toBe(6);
    });
});