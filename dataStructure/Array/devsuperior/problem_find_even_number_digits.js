const findEvenNumberDigits = (digits) => {
    let count = 0;

    for (let digit of digits) {
        if (digit.toString().length % 2 === 0) {
            count++;
        }
    }

    return count;
}

const digits = [12,345,2,6,7896];

console.log(findEvenNumberDigits(digits));

// findEvenNumberDigits2(digits);
