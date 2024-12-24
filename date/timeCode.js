const myFunction = () => {
    let x = 10;

    for (let i = 0; i < 10000000; i++) {
        x = -x;
    }
}

let start = Date.now();
myFunction();
let end = Date.now();

let time = end - start;
console.log(`Duration: ${time} ms`);