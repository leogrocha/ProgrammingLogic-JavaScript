const fatorial = (num) => {
    if (num===0) {
        return 1;
    }

    return num * (fatorial(num-1));
}

const fatorialTailRecursive = (n,total) => {
    if (n === 0) {
        return total;
    }

    return fatorialTailRecursive(n-1, n * total);
}

const fatorialComCauda = (n) => {
    return fatorialTailRecursive(n,1);
}

console.log(fatorial(5));
console.log(fatorialComCauda(5));