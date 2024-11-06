const invalidTransactions = (transactions) => {

    let listOfTransactions = []

    for (let item of transactions) {
        let transactionSplit = item.split(",")

        listOfTransactions.push({
            "name": transactionSplit[0],
            "time": Number(transactionSplit[1]),
            "amount": Number(transactionSplit[2]),
            "city": transactionSplit[3]
        })
    }

    console.log(listOfTransactions)

    for (let index in listOfTransactions) {
        let transaction = listOfTransactions[index];

        let valueExceeded = transaction.amount > 1000;

        console.log("Value Exceeded: " + valueExceeded);
    }
}

invalidTransactions(["alice,20,800,mtv", "alice, 50, 100, beijing"]);