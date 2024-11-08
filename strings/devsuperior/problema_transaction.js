function invalidtransactions(transactions) {
    const result = [];
    const invalidArray = new Array(transactions.length).fill(false);

    for (let i = 0; i < transactions.length; i++) {
        const ti = new Transaction(transactions[i]);

        if (ti.amount > 1000) {
            invalidArray[i] = true;
        }

        for (let j = i + 1; j < transactions.length; j++) {
            const tj = new Transaction(transactions[j]);
    
            if (ti.name === tj.name && Math.abs(ti.time - tj.time) <= 60 && ti.city !== tj.city) {
                invalidArray[i] = true;
                invalidArray[j] = true;
            }
        }
    }

    for (let i = 0; i < transactions.length; i++) {
        if(invalidArray[i]) {
            result.push(transactions[i]);
        }
    }

    return result;
}


function Transaction(csv) {
    const parts = csv.split(",");
    this.name = parts[0];
    this.time = Number(parts[1]);
    this.amount = Number(parts[2]);
    this.city = parts[3];
}

// invalidTransactions(["alice,20,800,mtv", "alice, 50, 100, beijing"]);

const transactions = ["alice,20,800,mtv", "alice,50,1200,beijing", "bob,60,300,sp", "ana,70,1100, sp"];

// const t1 = new Transaction(transactions[0]);
// const t2 = new Transaction(transactions[1]);

// console.log(t1, t2);

console.log(invalidtransactions(transactions));