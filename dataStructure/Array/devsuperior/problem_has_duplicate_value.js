const hasDuplicateValue = (nums) => {
    let listSet = new Set(nums);
    return nums.length !== listSet.size;
}

const nums = [1,2,3,1]
// const nums = [1,2,3,4]
console.log(hasDuplicateValue(nums));
