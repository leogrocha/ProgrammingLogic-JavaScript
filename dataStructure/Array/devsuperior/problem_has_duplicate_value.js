const hasDuplicateValue = (nums) => {

    let startLength = nums.length;
    let listSet = new Set();
    for (let index = 0; index < startLength; index++) {
        listSet.add(nums[index]);
    }

    return startLength !== listSet.size;
}

const nums = [1,2,3,1]
// const nums = [1,2,3,4]
console.log(hasDuplicateValue(nums));
