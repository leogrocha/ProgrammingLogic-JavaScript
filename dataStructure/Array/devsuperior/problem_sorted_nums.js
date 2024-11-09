const sortedArray = (nums) => {

    let numsMultiply = nums.map((value) => Math.abs(value) * Math.abs(value))
    numsMultiply.sort((a, b) => a - b);

    return numsMultiply;
}

const nums = [-4,-1,0,3,10];

console.log(sortedArray(nums));