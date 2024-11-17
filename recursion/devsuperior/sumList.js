const sumList = (list) => {
    if (list.length===0) {
        return 0;
    }

    const head = list[0];
    const tail = list.slice(1);

    return head + sumList(tail);
}

const sumListReduce = (list) => {
    const sum = list.reduce((accumulator, value) => accumulator + value, 0);
    return sum;
}

const sumListFor = (list) => {
    let sum = 0;
    for (let item of list) {
        sum += item;
    }

    return sum;
}

console.log(sumListReduce([4,5,3]));
console.log(sumListFor([4,5,3]));
console.log(sumList([4,5,3]));