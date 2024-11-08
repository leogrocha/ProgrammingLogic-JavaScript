const dotProductTwoArrays = (arr1, arr2) => {

    let sum = 0;

    for (let index = 0; index < arr1.length; index++) {
        sum += (arr1[index] * arr2[index]);
    }

    return sum;
}

const arr1 = [1,0,0,2,3];
const arr2 = [0,3,0,4,0];
console.log(dotProductTwoArrays(arr1, arr2));

const nums1 = [0,1,0,0,0];
const nums2 = [0,1,0,0,0];
console.log(dotProductTwoArrays(nums1, nums2));

const nums3 = [0,1,0,0,2,0,0];
const nums4 = [1,0,0,0,3,0,4];
console.log(dotProductTwoArrays(nums3, nums4));

