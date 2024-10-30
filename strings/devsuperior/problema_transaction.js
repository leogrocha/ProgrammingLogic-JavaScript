const invalidTransactions = (transactions) => {

    let listOfTransactions = []

    for (let item of transactions) {
        let transactionSplit = item.split(",")

        listOfTransactions.push({
            "name": transactionSplit[0],
            "time": transactionSplit[1],
            "value": transactionSplit[2],
            "city": transactionSplit[3]
        })
    }

    for (let transaction of listOfTransactions) {
        console.log(transaction);
    }
}

invalidTransactions(["alice,20,800,mtv", "alice, 50, 100, beijing"]);