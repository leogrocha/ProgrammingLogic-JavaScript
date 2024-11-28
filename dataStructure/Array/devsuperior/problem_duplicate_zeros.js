const duplicateZeros = (nums) => {
    for (let index = 0; index < nums.length; index++) {
        let num = nums[index];

        if(nums[index]===0) {
            nums.splice(index+1, 0, 0)
            nums.pop();
            index++;
        }
    }

    return nums;
}


const nums = [1,0,2,3,0,4,5,0];
console.log(duplicateZeros(nums));

console.log(duplicateZeros([1,2,3]));