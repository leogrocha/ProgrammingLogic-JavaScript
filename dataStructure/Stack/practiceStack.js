import Stack from "./stack.js";

const stack = new Stack();

console.log(stack.isEmpty()); //true

stack.push(5); // topo da pilha
stack.push(8); // topo da pilha
console.log(stack.peek()); //8

stack.push(11); // topo da pilha
console.log(stack.size()); //3
console.log(stack.isEmpty()); //false

stack.push(15); // topo da pilha

stack.pop(); // removendo o elemento que está no topo da pilha
stack.pop(); // removendo o elemento que está no topo da pilha

console.log(stack.size()); //2