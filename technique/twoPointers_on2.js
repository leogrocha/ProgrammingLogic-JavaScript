const arr = [2,3,5,8,9,10,11];
const value = 17;

const isPairSum = (arr, value) => {
    for(let i = 0; i < arr.length-1; i++)   {
        for(j = i+1; j < arr.length; j++){
            if(i === j)
                continue;
            if(arr[i] + arr[j] === value)       
                return true;
            if(arr[i] + arr[j] > value)
                break;
    
        }
    }

    return false;
}

console.log(isPairSum(arr, value)); // true


