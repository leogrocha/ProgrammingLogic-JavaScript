import Stack from "./stack.js";

const stack = new Stack();

stack.push(5); //topo da pilha
stack.push(8); //topo da pilha

console.log(stack.size()); //2

console.log(stack.isEmpty()); // false

console.log(stack.peek()); //8

stack.push(10); // topo da pilha

stack.pop(); // removendo o elemento topo da pilha

console.log(stack.peek()); //8

stack.clear(); // limpando todos os elementos

console.log(stack.isEmpty()); //true - mostrando que agora a pilha está vazia

console.log(stack.toString()); 

console.log(stack.isEmpty()); //true
