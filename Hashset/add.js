let elements = new Set();

console.log(elements); //Set(0) {}

elements.add(1);
console.log(elements); // Set(1) {1}

let array = new Set();
console.log(array);// Set(0) {]}

for(let i = 0; i < 10; i++){
    array.add(i);
}

console.log(array); // Set(10) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }