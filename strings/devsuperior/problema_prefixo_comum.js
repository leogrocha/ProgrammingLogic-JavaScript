const longestCommonPrefix = (v) => {

    let lowestIndex = v[0].length;
    let listOfPrefixs = [];

    for (let i = 0; i < v.length; i++) {
        if (v[i].length < lowestIndex) {
            lowestIndex = v[i].length
        }
    }

    for (let j = 0; j < lowestIndex; j++) {
        // let letter = "";
        // let temp = "";
        for (let k = 0; k < v.length; k++) {

            // letter = v[k][j]
            // if (letter != temp) {
                
            // }

            // if (temp == v[k][j]) {
            //     prefix += v[k][j]
            // }
            console.log(`INDICE DO ARRAY ${k} E LETRA ${j}: ${v[k][j]}`);
        }
    }

    console.log(`MENOR INDICE: ${lowestIndex}`);
}

longestCommonPrefix(['flowers', 'flow', 'flight']);