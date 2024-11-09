const biggerSales = (sales) => {
    let bigger = 0;

    for (let sale of sales) {
        if (sale.amount > bigger) {
            bigger = sale.amount;
        }
    }

    return bigger;
}


const sales = [
    {
      "name": "Barry Allen",
      "amount": 18196.0
    },
    {
      "name": "Logan",
      "amount": 4255.0
    },
    {
      "name": "Maria",
      "amount": 10298.0
    },
    {
      "name": "Ana",
      "amount": 26485.0
    },
    {
      "name": "Aurora",
      "amount": 19982.0
    },
    {
      "name": "Noah",
      "amount": 15820.0
    },
    {
      "name": "Leo",
      "amount": 21412.0
    },
    {
      "name": "Alex",
      "amount": 12000.0
    }
]

console.log(biggerSales(sales));