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



console.log(fibonacciIneficiente(6));
console.log(fibonacci(6,0,1));

