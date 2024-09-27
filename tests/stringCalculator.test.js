const { add } = require('../stringCalculator');
describe('String Calculator', () => {
    test('return 0 for an empty string', () => {
      expect(add('')).toBe(0);
    });
});