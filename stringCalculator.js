function add(numbers) {
    if (numbers === '') return 0;
    const simplifiedNumbers = numbers.replace(/,/g , "").split('');
    const sum = simplifiedNumbers.reduce((total, num) => {
        const n = parseInt(num, 10);
        return total + n;
      }, 0);
    return sum;
}

module.exports = { add };