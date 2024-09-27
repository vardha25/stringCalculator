function add(numbers) {
    let negativeNumbers = [];
    if (numbers === '') return 0;

    const filterNumbers = num => num <= 1000;

    if (numbers.startsWith("//")) {
        const delimiters = findDelimiters(numbers);
        numbers = numbers.split("\n")[1];
        const regex = new RegExp(delimiters.join('|'), 'g');
        const numArray = numbers.split(regex).map(Number).filter(filterNumbers);
        
        negativeNumbers = numArray.filter(num => num < 0);
        if (negativeNumbers.length > 0) throw new Error("negative numbers not allowed: " + negativeNumbers.join(', '));
        
        return numArray.reduce((a, b) => a + b, 0);
    }

    const numArray = numbers.split(/[,|\n]/).map(Number).filter(filterNumbers);
    negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    
    return numArray.reduce((a, b) => a + b, 0);
}

function findDelimiters(numbers) {
    const parts = numbers.split("\n");
    const delimiterPart = parts[0].slice(2);
    const delimiters = delimiterPart.split('][').map(d => d.replace(/[\[\]]/g, ''));
    return delimiters.map(d => d.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&')); // Escape special regex characters
}


module.exports = { add };