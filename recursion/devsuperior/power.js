const powerMath = (a, b) => {
    return Math.pow(a, b);
}

const powerLoop = (a, b) => {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result *= a;
    }

    return result;
}

const powerOperator = (a, b) => {
    return a ** b;
}

const power = (a, b) => {
    if (b==0) {
        return 1; // todo número elevado a zero é igual a 1
    }

    if (b==1) {
        return a;
    }

    return a * (power(a, b-1))
}

// console.log(powerMath(3,4));
// console.log(powerLoop(3,4));
// console.log(powerOperator(3,4));
console.log(power(3,4));