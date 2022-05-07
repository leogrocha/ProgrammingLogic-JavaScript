import Queue from "./queue.js";

const queue = new Queue;

console.log(queue.isEmpty()); //true


queue.enqueue('John');
queue.enqueue('Jack');

// count => quantidade de elementos da fila
console.log(queue.count); // 2

// lowestCount => responsável por gerenciar o primeiro da fila
console.log(queue.lowestCount); //0

console.log(queue.toString()); // John, Jack

queue.enqueue('Camila');
console.log(queue.toString()); // John, Jack, Camila
console.log(queue.isEmpty()); // false
queue.dequeue(); // Remove John => primeiro da fila
queue.dequeue(); // Remove Jack => primeiro da fila
console.log(queue.toString()); // Camila