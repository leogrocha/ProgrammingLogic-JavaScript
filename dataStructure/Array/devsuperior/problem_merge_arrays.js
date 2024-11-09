const mergeArrays = (nums1, nums2) => {
    
    let arrayConcat = nums1.concat(nums2);

    let listaOrdenada = [];

    for (let index = 0; index < arrayConcat.length; index++) {
        if(arrayConcat[index]!==0) {
            listaOrdenada.push(arrayConcat[index]);
        }
    }

    return listaOrdenada.sort((a, b) => a - b);
}

const merge = (nums1, m, nums2, n) => {
    for(let i = 0; i < n; i++) {
        nums1[m+1] = nums2[i];
    }

    nums1.sort((a, b) => a-b)
}

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];

console.log(mergeArrays(nums1, nums2));

