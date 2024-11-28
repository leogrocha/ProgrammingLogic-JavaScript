const numberPerfect = (n) => {
    if (n <= 1) {
        return false;
    }

    return numberPerfectTailRecursive(n, 1, 0);
}

const numberPerfectTailRecursive = (n, index, sum) => {
    if (index > n/2) {
        return sum === n;
    }

    if (n%index===0) {
        sum += index;
    }

    return numberPerfectTailRecursive(n, index+1, sum);
}

console.log(numberPerfect(28));