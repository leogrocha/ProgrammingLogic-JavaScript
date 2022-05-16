const arr = [2,3,5,8,9,10,11];
const value = 17;

const isPairSum = (arr, value) => {
    let pointer_1 = 0;
    let pointer_2 = arr.length - 1;

    while(pointer_1 < pointer_2) {
        if(arr[pointer_1] + arr[pointer_2] === value){
            return true;
        } else if (arr[pointer_1] + arr[pointer_2] < value){
            pointer_1++;
        } else {
            pointer_2--;
        }
    }

    return false;
}

console.log(isPairSum(arr, value)); // true