const sequentialSearch = (elem, arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i;
        }   
    }

    return -1;
}

console.log(sequentialSearch(32, [15,82,79,32,41,28]));