const ordemQuadratica = (arr) => {
    let newArray = new Array(arr.length).fill(0);

    for (let index in arr) {
        let item = arr[index];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > item) {
                newArray[index]++;
            }
        }
    }

    return newArray;
}

console.log(ordemQuadratica([7,3,8,7,5]));