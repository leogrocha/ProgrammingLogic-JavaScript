function matrizMultiply(matrizA, matrizB) {

    let m = matrizA.length // 2
    let p = matrizA[0].length // 3
    let n = matrizB[0].length // 2

    const C = new Array(m).fill().map(() => new Array(n).fill(0)); 

    for (let i = 0; i < m; i++) {

        for(let j = 0; j < n; j++) {

            for (let k = 0; k < p; k++) {

                C[i][j] += matrizA[i][k] * matrizB[k][j]
            }
        }
    }

    return C;
}

console.log(matrizMultiply([[1,2,3], [4,5,6]], [[7,8], [9,10], [11,12]]));
// matrizMultiply([[1,2,3], [4,5,6]], [[7,8], [9,10], [11,12]]);

// [[1,2,3], [4,5,6]], [[7,8], [9,10], [11,12]]

// result: [ [ 58, 64 ], [ 139, 154 ] ]

// [1,2,3] [7,8] 
// [4,5,6] [9,10]
//         [11,12]

// 1*7 + 2*9 + 3*11 = 7 + 18 + 33 = 58



// [1,2,3,4] [5,6,7,8]

// 1 * 5 = 5
// 2 * 6 = 12
// 3 * 7 = 21
// 4 * 8 = 32

// 5 + 12 + 21 + 32 = 70

// [1,2]   [5,6]
// [3,4]   [7,8]

// [19 22]
// [43 50]

// 1 * 5 + 2 * 7 = 5 + 14 = 19
// 1 * 6 + 2 * 8 = 6 + 16 = 22
// 3 * 5 + 4 * 7 = 15 + 28 = 43
// 3 * 6 + 4 * 8 = 18 + 32 = 50



