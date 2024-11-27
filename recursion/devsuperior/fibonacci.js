const fibonacciIneficiente = (n) => {
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  return fibonacciIneficiente(n -1) + fibonacciIneficiente(n-2);
}

const fibonacci = (n, a, b) => {
  if (n == 0) {
    return a;
  }

  if (n == 1) {
    return b;
  }

  return fibonacci(n-1, b, a+b);
} 

const fibonacciFor = (n) => {
  if (n <= 1) {
    return n;
  }

  let a = 0;
  let b = 1;
  let temp = b;

  for (let index = 1; index < n; index++) {
    temp = b;
    b = a + b;
    a = temp;
  }

  return b;
}

// console.log(fibonacciIneficiente(5));
// console.log(fibonacci(100,0,1));
console.log(fibonacciFor(8));

