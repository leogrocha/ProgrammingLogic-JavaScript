const totalSales = (sales, departament) => {
    return totalSalesTailRecursive(sales, departament, 0, 0, 0);
}

const totalSalesTailRecursive = (sales, departament, index, sum, count) => {
    if (index >= sales.length) {
        return [`${count} VENDAS`, `TOTAL = R$ ${sum.toFixed(2)}`]
    }

    const data = sales[index].split(",")
    if (data.length >= 4 && data[3]===departament) {
        count++;
        sum += parseFloat(data[2])
    }

    return totalSalesTailRecursive(sales, departament, index+1, sum, count);
}

const sales = [
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    "18317,04/09/2024,250.4,VESTUARIO",
    "18972,11/09/2024,385.5,JARDINAGEM",
]

const departament = "VESTUARIO";

console.log(totalSales(sales, departament));
