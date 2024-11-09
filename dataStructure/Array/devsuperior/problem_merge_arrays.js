const mergeArrays = (nums1, nums2) => {
    
    let arrayConcat = nums2.concat(nums1);

    let listaOrdenada = [];

    for (let index = 0; index < arrayConcat.length; index++) {
        if(arrayConcat[index]!==0) {
            listaOrdenada.push(arrayConcat[index]);
        }
    }

    return listaOrdenada.sort((a, b) => a - b);
}

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];

console.log(mergeArrays(nums1, nums2));

