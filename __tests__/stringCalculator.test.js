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

  test('supports custom delimiters of varying length', () => {
    expect(add("//[***]\n1***2")).toBe(3);
});

  test('throws an exception for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
  });

  test('throws an exception for multiple negative numbers', () => {
    expect(() => add('-1,-2,3')).toThrow('negative numbers not allowed: -1, -2');
  });

  test('throws an exception for negative numbers with custom delimiter', () => {
    expect(() => add('//;\n1;-2')).toThrow('negative numbers not allowed: -2');
  });

  test('supports multiple delimiters of varying lengths', () => {
    expect(add("//[***][%]\n1***2%3")).toBe(6);
    expect(add("//[**][%%]\n1**2%%3")).toBe(6);
  });

  test('handles multiple custom delimiters with varying lengths', () => {
    expect(add("//[***][#][%]\n1***2#3%4")).toBe(10);
  });
});