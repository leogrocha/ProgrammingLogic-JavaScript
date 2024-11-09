const maxConsecutiveOnes = (nums) => {
    let list = [];
    let count = 0;
    let bigger = 0;

    for(let num of nums) {
        if(num===1){
            count++;
        } else {
            if(count != 0){
                list.push(count);
            }

            count=0;
        }
    }

    if(count != 0) {
        list.push(count);
    }

    
    for (let num of list) {
        if (num > bigger) {
            bigger = num;
        }
    }

    console.log(bigger);
}

const nums = [1,1,0,1,1,1];
const nums2 = [1,0,1,1,0,1];

maxConsecutiveOnes(nums);

