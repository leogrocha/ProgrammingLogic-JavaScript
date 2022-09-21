const sort = [10,20,30,40,50];
const select = [10,20,30,40,50];
var isEquals = true;

for(let i = 0; i < sort.length; i++) {
    if(sort[i] == select[i]) {
        isEquals = true;
    } else {
        isEquals = false;
    }
}

console.log(isEquals);