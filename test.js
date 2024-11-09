let listOfPersons = [];

for (let index = 1; index <= 10; index++) {
    listOfPersons.push({
        id: index,
        name: "Person"+index,
        document: "Document"+index,
        active: index % 2 == 0
    });
}

console.log(listOfPersons);