function add(numbers) {
    if (numbers === '') return 0;
    const delimiter = findDelimiter(numbers);
    const simplifiedNumbers = numbers.replace(/\/\/.*\n/, '').split(new RegExp(`[${delimiter}\n]`));
    const sum = simplifiedNumbers.reduce((total, num) => {
        const n = parseInt(num, 10);
        return total + n;
      }, 0);
    return sum;
}

//Extracting delimiter from string of format "//[delimiter]\n[numbers…]".
function findDelimiter(numbers) {
    const defaultDelimiter = ',';
    if (numbers.startsWith('//')) {
      const customDelimiter = numbers.split('\n')[0].slice(2);
      return customDelimiter;
    }
    return defaultDelimiter;
  }

module.exports = { add };