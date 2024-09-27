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

    test('handles an unknown amount of numbers', () => {
      expect(add('1,5,2')).toBe(8);
    });
  
    test('handles new lines as separators', () => {
      expect(add('1\n2,3')).toBe(6);
    });

    test('supports custom delimiters', () => {
      expect(add('//;\n1;2')).toBe(3);
    });
});