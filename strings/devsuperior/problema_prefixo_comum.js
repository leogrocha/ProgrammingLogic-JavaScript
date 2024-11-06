const longestCommonPrefix = (v) => { 

    v.sort();
    let first = v[0];
    let last = v[v.length-1];

    let result = [];

    for (let i = 0; i < Math.min(first.length, last.length); i++) {
        if (first[i] !== last[i]) {
            return result.join("");
        }

        result.push(first[i]);
    }

    return result.join("");
}

const longestCommonPrefixManual = (strs) => {

    let lowestIndex = strs[0].length;
    let listOfPrefixs = [];
    let equal = true;
    let prefix = "";
    let temp = "";

    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < lowestIndex) {
            lowestIndex = strs[i].length
        }
    }

    for (let j = 0; j < lowestIndex; j++) {
        for (let k = 0; k < strs.length; k++) {
            temp += strs[k][j]
        }

        for (let w = 1; w < temp.split("").length; w++) {
            if (temp[0] !== temp[w]) {
                equal = false;
                break;
            }
        }

        if (equal) {
            prefix += temp[0]
        } else {
            listOfPrefixs.push(prefix);
            return prefix;
        }


        temp = "";
        equal = true;
    }

    return prefix;

    // listOfPrefixs.push(prefix);


    // let indice = 0;
    // let bigger = 0;

    // for (let z = 0; z < listOfPrefixs.length; z++) {
    //     if (listOfPrefixs[z].length > bigger) {
    //         bigger = listOfPrefixs[z].length;
    //         indice = z;
    //     }
    // }

    // console.log(listOfPrefixs);

    // return listOfPrefixs[indice];
}

console.log(longestCommonPrefixManual(['flowers', 'flow', 'flight']));
console.log(longestCommonPrefixManual(["flower","fkow"]));

console.log(longestCommonPrefix(['flowers', 'flow', 'flight']));
console.log(longestCommonPrefix(["flower","fkow"]));