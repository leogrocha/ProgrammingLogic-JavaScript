const sortedArray = (nums) => {

    let numsMultiply = nums.map((value) => Math.pow(value, 2))
    numsMultiply.sort((a, b) => a - b);

    return numsMultiply;
}

const nums = [-4,-1,0,3,10];

console.log(sortedArray(nums));