const arr = [1,4,2,10,2,3,1,0,20];
let k = 4;
let n = arr.length;

// Encontrar a maior soma de subarray com tamanho k
function maxSum(arr, n, k) {
    let max_sum = Number.MIN_VALUE;

    for(let i = 0; i < n-k+1; i++){
        let current_sum = 0;
        for(let j = 0; j < k; j++){
            current_sum = current_sum + arr[i+j];

            max_sum = Math.max(current_sum, max_sum);
        }
    }

    return max_sum;
}

console.log(maxSum(arr, n, k));